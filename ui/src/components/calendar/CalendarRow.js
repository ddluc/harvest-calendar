import React from 'react';
import Cell from './Cell';
import { Store } from '../../store/Store';
import { getMonthsInSeason } from '../../services/UtilityService';

import '../../styles/CalendarRow.css'

function CalendarRow({vegetable, cellMap}) {
  const { state, dispatch } = React.useContext(Store);
  const months = getMonthsInSeason(state.marketData.months, state.activeSeason);
  let cells = [];
  vegetable.mPos.forEach((mPos) => {
    let cellKey = `${mPos.month}-${mPos.segment}`;
    if (Object.keys(cellMap.body).includes(cellKey)) {
      let id = `${vegetable.key}-${cellKey}`;
      let cellIndex = cellMap.body[cellKey];
      let isActive = (cellKey === `${state.activeMonth}-${state.activeSegment}`) ? 'active' : '';
      cells.push(<Cell key={id} mPos={mPos} id={id} cellIndex={cellIndex} isActive={isActive}/>);
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