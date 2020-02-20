import React from 'react';
import { useStore } from '../../flux/store';
import {setPricingMode} from '../../flux/actions';

import '../../styles/PricingToggle.scss';

function PricingToggle() {

   const { state, dispatch } = useStore(); 

   let status = '';
   let label = '';
   let updateValue = '';

   if (state.pricingMode === false ) {
     status = 'off';
     label = 'OFF';
     updateValue = true;
   } else if (state.pricingMode === true) {
     status = 'on';
     label = ' ON ';
     updateValue = false;
   }

  return (
    <div className="pricing-toggle">
      <h4>Pricing Mode</h4>
      <a className={`toggle ${status}`} onClick={() => setPricingMode(dispatch, updateValue)}>{label}</a>
    </div>
  );
}

export default PricingToggle;
