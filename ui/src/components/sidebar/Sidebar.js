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
        <h2>{state.appTitle}</h2>
        <span>For Willamette Valley Farmers Markets</span>
        <SearchField placeholder="Search..."/>
        <SeasonPicker />
        <PricingToggle />
        < hr />
        <div className="menu-item"><a href="#">How to use this tool</a></div>
        <div className="menu-item"><a href="#">Contribute your data</a></div>
    </div>
  );
}

export default Sidebar;
