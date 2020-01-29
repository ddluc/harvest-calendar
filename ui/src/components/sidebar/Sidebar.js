import React from 'react';
import { Store } from '../../flux/store';
import SearchField from './SearchField';
import SeasonPicker from './SeasonPicker';
import PricingToggle from './PricingToggle';

import '../../styles/Sidebar.scss'

function Sidebar() {

  const { state } = React.useContext(Store);

  return (
    <div className="sidebar">
        <div class="sidebar-title">
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
