import React from 'react';
import Calendar from './Calendar.js';
import Sidebar from './Sidebar.js';

import '../styles/App.scss'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Calendar />
      </div>
    </div>
  );
}

export default App;
