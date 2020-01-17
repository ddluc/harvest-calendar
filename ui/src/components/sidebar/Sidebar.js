import React from 'react';
import { Store } from '../../flux/store';

function Sidebar() {

  const { state } = React.useContext(Store);

  return (
    <div className="sidebar">
        <h2>{state.appTitle}</h2>
        <span>For Willamette Valley Farmer's Markets</span>
    </div>
  );
}

export default Sidebar;
