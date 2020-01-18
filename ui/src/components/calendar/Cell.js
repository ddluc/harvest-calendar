import React from 'react';
import { Store } from '../../flux/store';

function Cell ({mPos, cellIndex, id, isActive}) {

  const { state, dispatch } = React.useContext(Store);

  let cellContent = '';

  if (state.pricingMode == 'on') {
    cellContent = mPos.value > 0 ? `${mPos.value}` : '-';
  } else if (mPos.status === 'none' || mPos.status === 'off') {
    cellContent = '-';
  } else if (mPos.status === 'early') {
    cellContent = 'E';
  } else if (mPos.status === 'peak') {
    cellContent = 'P'
  } else if (mPos.status === 'late') {
    cellContent = 'L'
  }

  return (<div id={id} className={`calendar-cell cell-${cellIndex} ${isActive} ${mPos.status}`} >{cellContent}</div>);

};

export default Cell;
