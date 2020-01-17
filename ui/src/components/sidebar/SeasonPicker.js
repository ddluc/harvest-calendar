import React from 'react';
import { Store } from '../../flux/store';

function SeasonPicker() {

  const { state, dispatch } = React.useContext(Store);

  return (
    <input type="text />
  );
}

export default SeasonPicker;
