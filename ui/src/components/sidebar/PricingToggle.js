import React from 'react';
import { Store } from '../../flux/store';

function PricingToggle() {

  const { state } = React.useContext(Store);

  return (
    <input type="text />
  );
}

export default PricingToggle;
