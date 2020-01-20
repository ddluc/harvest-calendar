import React from 'react';
import { Store } from '../../flux/store';

import '../../styles/Cell.scss'

function Cell ({mPos, cellIndex, id, isActive, showPrice}) {

  const { state, dispatch } = React.useContext(Store);

  let cellContent = '';

  if (state.pricingMode === true) {
    let subContent = mPos.value > 0 ? `$${mPos.value}` : '-';
    cellContent = (<div>{subContent}<span>{mPos.unit}</span></div>);
  } else if (mPos.status === 'none' || mPos.status === 'off') {
    cellContent = '-';
  } else if (mPos.status === 'early') {
    cellContent = 'E';
  } else if (mPos.status === 'peak') {
    cellContent = 'P'
  } else if (mPos.status === 'late') {
    cellContent = 'L'
  }

  let classNames = `${mPos.status}`;
  if (isActive) {
    classNames = `${classNames} active`;
  }
  if (state.pricingMode === true) {
    classNames= `${classNames} price`;
  }


  return (<div id={id} className={`calendar-cell cell-${cellIndex} ${classNames}`} >{cellContent}</div>);

};

export default Cell;
