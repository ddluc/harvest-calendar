import React from 'react';
import Calendar from './calendar/Calendar';
import Sidebar from './sidebar/Sidebar';

import { StoreProvider } from '../flux/store';

import '../styles/App.scss'

function App() {
  return (
    <StoreProvider>
      <div className="app">
        <Sidebar />
        <div className="main">
          <Calendar />
          <div className="acknowledgement"><span>Developed by <a href="http://ddluc.com">DDLUC Engineering, LLC</a></span></div>
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
