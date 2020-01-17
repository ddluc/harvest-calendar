import React from 'react';
import { Store } from '../../store/Store';

function SeasonPicker() {

  const { state, dispatch } = React.useContext(Store);

  return (
    <input type="text />
  );
}

export default SeasonPicker;
