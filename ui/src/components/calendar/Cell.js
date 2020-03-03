import React from 'react';
import PeakIcon  from '../icons/peak';
import { Store } from '../../flux/store';
import '../../styles/Cell.scss'


function Cell({ mPos, cellIndex, isActive, vegetable}) {

  const { state, dispatch } = React.useContext(Store);

  if (mPos) {
    let cellContent = '';
    const statusDisplay = mPos.status.charAt(0).toUpperCase() + mPos.status.slice(1)
    // Determine cell contents
    if (state.pricingMode === true) {
      if (mPos.value > 0) {
        cellContent = (<div>{mPos.value}<span class="unit">{mPos.unit}</span></div>);
      } else {
        cellContent = '-';
      }
    } else if (mPos.status === 'peak') {
      cellContent = (<div><PeakIcon type={vegetable.category.key} /></div>);
    }
    // Build class string
    let classNames = `${mPos.status} ${vegetable.category.key.replace('_', '-')}`;
    if (isActive) {
      classNames = `${classNames} active`;
    }
    if (state.pricingMode === true) {
      classNames = `${classNames} price`;
    }
    // Render component
    return (
      <div
        className={`calendar-cell ${classNames}`}
        data-vegetable={vegetable.key}
        data-market-pos={`${mPos.month}-${mPos.segment}`}
        data-cell-index={cellIndex}
        data-cell-status={mPos.status}
      >
        {cellContent}
      </div>);
  } else {
    return <div className="calendar-cell"></div>
  }

 

};

export default Cell;
