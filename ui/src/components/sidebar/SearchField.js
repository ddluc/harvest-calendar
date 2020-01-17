import React from 'react';
import { Store } from '../../store/Store';

function SearchField() {

  const { state } = React.useContext(Store);

  return (
    <input type="text />
  );
}

export default Sidebar;
