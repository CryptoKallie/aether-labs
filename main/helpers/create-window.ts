import {
  screen,
  BrowserWindow,
  BrowserWindowConstructorOptions,
  Rectangle,
} from 'electron';
import ElectronStore from 'electron-store';

type WindowState = {
  x: number;
  y: number;
  width: number;
  height: number;
};

const createWindow = (
  windowName: string,
  options: BrowserWindowConstructorOptions,
): BrowserWindow => {
  const key = 'window-state';
  const name = `window-state-${windowName}`;
  const store = new ElectronStore<WindowState>({ name });
  const defaultWidth = options.width ?? 800;
  const defaultHeight = options.height ?? 600;
  const defaultSize: WindowState = {
    width: defaultWidth,
    height: defaultHeight,
    x: 0,
    y: 0,
  };
  let state: WindowState;

  const restore = (): WindowState => store.get(key, defaultSize);

  const windowWithinBounds = (
    windowState: WindowState,
    bounds: Rectangle,
  ): boolean => {
    return (
      windowState.x >= bounds.x &&
      windowState.y >= bounds.y &&
      windowState.x + windowState.width <= bounds.x + bounds.width &&
      windowState.y + windowState.height <= bounds.y + bounds.height
    );
  };

  const resetToDefaults = (): WindowState => {
    const {
      width: screenWidth,
      height: screenHeight,
      x: screenX,
      y: screenY,
    } = screen.getPrimaryDisplay().bounds;
    return {
      ...defaultSize,
      x: Math.round(screenX + (screenWidth - defaultWidth) / 2),
      y: Math.round(screenY + (screenHeight - defaultHeight) / 2),
    };
  };

  const ensureVisibleOnSomeDisplay = (
    windowState: WindowState,
  ): WindowState => {
    const visible = screen.getAllDisplays().some((display) => {
      return windowWithinBounds(windowState, display.bounds);
    });
    if (!visible) {
      // Window is partially or fully not visible now.
      // Reset it to safe defaults.
      return resetToDefaults();
    }
    return windowState;
  };

  state = ensureVisibleOnSomeDisplay(restore());

  const win = new BrowserWindow({
    ...state,
    ...options,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      ...options.webPreferences,
    },
  });

  const getCurrentPosition = (): WindowState => {
    const [x, y] = win.getPosition();
    const [width, height] = win.getSize();
    return { x, y, width, height };
  };

  const saveState = (): void => {
    if (!win.isMinimized() && !win.isMaximized()) {
      state = getCurrentPosition();
    }
    store.set(key, state);
  };

  win.on('close', saveState);

  return win;
};

export default createWindow;
