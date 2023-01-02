import React from 'react';
import './Main.scss';
import Sidebar from '../Sidebar/Sidebar';
import Dashboard from '../Dashboard/Dashboard';

const Main = () => {
  return (
    <div className="main">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Main;
