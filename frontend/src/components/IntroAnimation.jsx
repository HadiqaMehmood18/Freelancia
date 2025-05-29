import React, { useEffect, useState } from 'react';
import './IntroAnimation.css';

const IntroAnimation = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onFinish) onFinish();
    }, 5000); // 5 seconds animation duration
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!show) return null;

  return (
    <div className="intro-animation-container">
      <div className="freelance-icon">
        {/* Example: briefcase icon or any SVG */}
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke=" #FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3" fill=""></path>
        </svg>
      </div>
      <div className="animation-text">Welcome to Freelancia</div>
      <div className="animation-subtext">Connecting Freelancers & Clients</div>
      <div className="animation-rolling">
        {/* Simple rolling animation */}
        <div className="rolling-bar"></div>
        <div className="rolling-bar"></div>
        <div className="rolling-bar"></div>
      </div>
    </div>
  );
};

export default IntroAnimation;