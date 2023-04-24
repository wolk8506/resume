import { Resume } from './views/resume';
import { Sidebar } from './views/sidebar';
import React from 'react';

export const App = () => {
  return (
    <div className="main-container">
      <Resume />
      <Sidebar />
    </div>
  );
};
