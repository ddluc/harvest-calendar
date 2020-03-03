import React from 'react';
import PeakIcon  from '../icons/peak';
import { Store } from '../../flux/store';
import '../../styles/Cell.scss'


function Cell({ mPos, cellIndex, id, isActive, category}) {

  const { state, dispatch } = React.useContext(Store);

  let cellContent = '';
  const statusDisplay = mPos.status.charAt(0).toUpperCase() + mPos.status.slice(1)

  if (state.pricingMode === true) {
    if (mPos.value > 0) {
      cellContent = (<div>{mPos.value}<span class="unit">{mPos.unit}</span></div>);
    } else {
      cellContent = '-';
    }
  } else if (mPos.status === 'peak') {
    cellContent = (<div><PeakIcon type={category} /></div>);
  }

  let classNames = `${mPos.status} ${category.replace('_', '-')}`;
  if (isActive) {
    classNames = `${classNames} active`;
  }
  if (state.pricingMode === true) {
    classNames= `${classNames} price`;
  }


  return (
    <div id={id} 
         className={`calendar-cell ${classNames}`} 
         data-cell-index={cellIndex} 
         data-cell-status={mPos.status}
      >
        {cellContent}
    </div>);

};

export default Cell;
