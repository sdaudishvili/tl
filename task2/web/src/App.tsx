import React from 'react';
import { Header } from './components/Header';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />

      <div className="main-content">
        <div className="container title-container">
          <div className="title">Welcome to Journey Planner</div>
          <button className="btn" onClick={() => alert('Not implemented')}>
            Add new journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
