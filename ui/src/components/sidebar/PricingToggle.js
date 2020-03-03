import React from 'react';
import { Store } from '../../flux/store';
import {setPricingMode} from '../../flux/actions';

import '../../styles/PricingToggle.scss';

function PricingToggle() {

   const { state, dispatch } = React.useContext(Store);

   let status = '';
   let label = '';
   let updateValue = '';
   let warning = ' '; 
   if (state.pricingMode === false ) {
     status = 'off';
     label = 'OFF';
     updateValue = true;
   } else if (state.pricingMode === true) {
     status = 'on';
     label = ' ON ';
     updateValue = false;
     warning = '* Data is still being researched';
   }

  return (
    <div className="pricing-toggle">
      <h4>Pricing Mode</h4>
      <a className={`toggle ${status}`} onClick={() => setPricingMode(dispatch, updateValue)}>{label}</a>
      <p>{ warning }</p>
    </div>
  );
}

export default PricingToggle;
