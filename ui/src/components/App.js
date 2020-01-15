import React from 'react';
import Calendar from './Calendar.js';
import Sidebar from './Sidebar.js';

import { StoreProvider } from '../store/Store.js';

import '../styles/App.scss'

function App() {
  return (
    <StoreProvider>
      <div className="app">
        <Sidebar />
        <div className="main">
          <Calendar />
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
