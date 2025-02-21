import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import HomePage from './Pages/HomePage';
import LogsPage from './Pages/LogsPage';
import SettingsPage from './Pages/SettingsPage';
import SimulationPage from './Pages/SimulationPage';



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<HomePage />} />
          <Route path="simulation" element={<SimulationPage />} />
          <Route path="logs" element={<LogsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
