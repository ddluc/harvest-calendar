import React from 'react';
import { Store } from '../../flux/store';
import SearchField from './SearchField';
import SeasonPicker from './SeasonPicker';

import '../../styles/Sidebar.scss'

function Sidebar() {

  const { state } = React.useContext(Store);

  return (
    <div className="sidebar">
        <h2>{state.appTitle}</h2>
        <span>For Willamette Valley Farmer's Markets</span>
        <SearchField placeholder="Search..."/>
        <SeasonPicker />
    </div>
  );
}

export default Sidebar;
