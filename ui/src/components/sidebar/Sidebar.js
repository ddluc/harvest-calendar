import React from 'react';
import { useStore } from '../../flux/store';
import SearchField from './SearchField';
import SeasonPicker from './SeasonPicker';
import PricingToggle from './PricingToggle';

import '../../styles/Sidebar.scss'

function Sidebar() {

  const { state } = useStore();

  return (
    <div className="sidebar">
        <div className="sidebar-title">
          <h2>{state.appTitle}</h2>
          <span>For Willamette Valley Farmers Markets</span>
        </div>
        <SearchField placeholder="Search..."/>
        <SeasonPicker />
        <PricingToggle />
        < hr />
        <div className="menu-item"><a href="#">How to use this tool</a></div>
        <div className="menu-item"><a href="https://github.com/ddluc/harvest-calendar" target="_blank">View On Github</a></div>
    </div>
  );
}

export default Sidebar;
