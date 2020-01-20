import React from 'react';
import Cell from './Cell';
import { Store } from '../../flux/store';
import { getMonthsInSeason } from '../../services/selectors';

import '../../styles/CalendarRow.scss'

function CalendarRow({vegetable, cellMap}) {
  const { state, dispatch } = React.useContext(Store);
  const months = getMonthsInSeason(state);
  let cells = [];
  vegetable.mPos.forEach((mPos) => {
    let cellKey = `${mPos.month}-${mPos.segment}`;
    if (Object.keys(cellMap.body).includes(cellKey)) {
      let id = `${vegetable.key}-${cellKey}`;
      let cellIndex = cellMap.body[cellKey];
      let isActive = (cellKey === `${state.activeMonth}-${state.activeSegment}`) ? 'active' : '';
      let showPrice = state.pricingMode === true ? 'showPrice' : '';
      cells.push(<Cell key={id} mPos={mPos} id={id} cellIndex={cellIndex} isActive={isActive} showPrice={showPrice}/>);
    }
  });

  return (
    <div className="calendar-row">
      <div className="calendar-cell cell-label">{vegetable.label}</div>
      { cells }
    </div>
  );
}

export default CalendarRow;
