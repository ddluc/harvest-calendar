import React from 'react';
import { Store } from '../../flux/store';
import {setPricingMode} from '../../flux/actions';

import '../../styles/PricingToggle.scss';

function PricingToggle() {

   const { state, dispatch } = React.useContext(Store);

   let status = '';
   let label = '';
   let updateValue = '';

   if (state.pricingMode === 'off') {
     status = 'off';
     label = 'OFF';
     updateValue = 'on';
   } else if (state.pricingMode === 'on') {
     status = 'on';
     label = ' ON ';
     updateValue = 'off';
   }

  return (
    <div className="pricing-toggle">
      <h4>Pricing Mode</h4>
      <a class={`toggle ${status}`} onClick={() => setPricingMode(dispatch, updateValue)}>{label}</a>
    </div>
  );
}

export default PricingToggle;
