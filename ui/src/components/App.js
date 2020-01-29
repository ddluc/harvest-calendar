import React from 'react';
import Calendar from './calendar/Calendar';
import Sidebar from './sidebar/Sidebar';
import PhoneRotateIcon from './icons/phoneRotate';

import { StoreProvider } from '../flux/store';

import '../styles/App.scss'

function App() {
  return (
    <StoreProvider>
      <div className="app">
        <Sidebar />
        <div className="main">
          <Calendar />
          <div className="mobile-warning">
            <PhoneRotateIcon />
            <p>Rotate your phone to landscape view on mobile. Support for smaller screen sizes coming soon! </p>
          </div>
          <div className="acknowledgement"><span>Developed by <a href="http://ddluc.com">DDLUC Engineering, LLC</a></span></div>
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
