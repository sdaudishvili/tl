import React from 'react';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <div className="header" data-testid="header">
      <div className="header-container" data-testid="header-container">
        <div className="header-left" data-testid="header-left">
          <div className="logo" data-testid="logo">
            <div className="logo-icon" data-testid="logo-icon">
              🚀
            </div>
            <div className="logo-text" data-testid="logo-text">
              Journey Planner
            </div>
          </div>
        </div>
        <div className="header-right" data-testid="header-right">
          <button
            className="user-button"
            data-testid="user-button"
            onClick={() => alert('User profile')}
          >
            <div className="user-avatar" data-testid="user-avatar">
              👤
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
