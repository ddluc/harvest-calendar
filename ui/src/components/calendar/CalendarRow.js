import React from 'react';
import Cell from './Cell';
import { Store } from '../../flux/store';
import { getMonthsInSeason } from '../../services/selectors';

import '../../styles/CalendarRow.scss'

function CalendarRow({vegetable, cellMap, rowIndex}) {
  const { state, dispatch } = React.useContext(Store);
  let cells = [];
  for (const cellKey in cellMap.body) {
    const cellIndex = cellMap.body[cellKey];
    // Find the cooresponding market data to the cell id in the cell map
    const mPos = vegetable.mPos.find((m) => {
      let id = `${m.month}-${m.segment}`
      return (id === cellKey); 
    }); 
    const isActive = (cellKey === `${state.activeMonth}-${state.activeSegment}`) ? 'active' : '';
    if (mPos) {
      cells.push(<Cell key={cellKey} mPos={mPos} cellIndex={cellIndex} isActive={isActive} vegetable={vegetable} />);
    } else {
      cells.push(<Cell key={cellKey} cellIndex={cellIndex} isActive={isActive} vegetable={vegetable} />); 
    }
  }
  let categoryClass = vegetable.category.key.replace('_', '-')
  return (
    <div className="calendar-row" data-row-index={rowIndex}>
      <div className={`calendar-cell cell-label`}>
        <p>{vegetable.label}</p>
        <small> <span className={categoryClass}>{vegetable.category.label}</span> | <em>{vegetable.scientific_name}</em></small>
      </div>
      { cells }
    </div>
  );
}

export default CalendarRow;
