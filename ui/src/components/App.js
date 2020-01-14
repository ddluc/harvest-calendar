import React from 'react';
import '../styles/App.css'

import Calendar from './Calendar.js';
import Sidebar from './Sidebar.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Calendar />
      <Footer />
    </div>
  );
}

export default App;
