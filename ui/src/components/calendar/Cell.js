import React from 'react';
import PeakIcon  from '../icons/peak';
import LateIcon  from '../icons/late';
import EarlyIcon from '../icons/early';
import { useStore } from '../../flux/store';
import '../../styles/Cell.scss'


function Cell ({mPos, cellIndex, id, isActive, showPrice}) {

  const { state, dispatch } = useStore();

  let cellContent = '';
  const statusDisplay = mPos.status.charAt(0).toUpperCase() + mPos.status.slice(1)

  if (state.pricingMode === true) {
    if (mPos.value > 0) {
      cellContent = (<div>{mPos.value}<span class="unit">{mPos.unit}</span></div>);
    } else {
      cellContent = '-';
    }
  } else if (mPos.status === 'none' || mPos.status === 'off') {
    cellContent = '-';
  } else if (mPos.status === 'early') {
    cellContent = (<div><EarlyIcon /><span className="status">{statusDisplay}</span></div>);
  } else if (mPos.status === 'peak') {
    cellContent = (<div><PeakIcon /><span className="status">{statusDisplay}</span></div>);
  } else if (mPos.status === 'late') {
    cellContent = (<div><EarlyIcon /><span className="status">{statusDisplay}</span></div>);
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
