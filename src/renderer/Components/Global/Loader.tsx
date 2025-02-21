import React from 'react';
import '../../Styles/Spinner.css';
import { useState, useEffect } from 'react';

const Loader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  return (
    <div className="loading">
      <div className="loading-wide">
        <div className="l1 color"></div>
        <div className="l2 color"></div>
        <div className="e1 color animation-effect-light"></div>
        <div className="e2 color animation-effect-light-d"></div>
        <div className="e3 animation-effect-rot">X</div>
        <div className="e4 color animation-effect-light"></div>
        <div className="e5 color animation-effect-light-d"></div>
        <div className="e6 animation-effect-scale">*</div>
        <div className="e7 color"></div>
        <div className="e8 color"></div>
      </div>
    </div>
  );
};

export default Loader;
