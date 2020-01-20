import React from 'react';
import PeakIcon  from '../icons/peak';
import LateIcon  from '../icons/late';
import EarlyIcon from '../icons/early';
import { Store } from '../../flux/store';
import '../../styles/Cell.scss'


function Cell ({mPos, cellIndex, id, isActive, showPrice}) {

  const { state, dispatch } = React.useContext(Store);

  let cellContent = '';

  if (state.pricingMode === true) {
    if (mPos.value > 0) {
      cellContent = (<div>{mPos.value}<span>{mPos.unit}</span></div>);
    } else {
      cellContent = '-';
    }
  } else if (mPos.status === 'none' || mPos.status === 'off') {
    cellContent = '-';
  } else if (mPos.status === 'early') {
    cellContent = <EarlyIcon />;
  } else if (mPos.status === 'peak') {
    cellContent = <PeakIcon />
  } else if (mPos.status === 'late') {
    cellContent = <LateIcon />
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
