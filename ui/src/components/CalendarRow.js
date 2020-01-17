import React from 'react';
import Cell from './Cell';
import { getMonthsInSeason } from '../services/UtilityService';

import '../styles/CalendarRow.css'

function CalendarRow({vegetable, marketData, view, activeSeason, activeMonth, cellMap, pricingMode}) {

  const months = getMonthsInSeason(marketData.months, activeSeason);

  const renderCells = () => {
    let cells = [];
    vegetable.mPos.forEach((mPos) => {
      let cellKey = `${mPos.month}-${mPos.segment}`;
      if (Object.keys(cellMap.body).includes(cellKey)) {
        let id = `${vegetable.key}-${cellKey}`;
        let cellIndex = cellMap.body[cellKey];
        cells.push(<Cell mPos={mPos} id={id} cellIndex={cellIndex} />);
      }
    });
    return cells;
  }

  return (
    <div className="calendar-row">
      <div className="calendar-cell cell-label">{vegetable.label}</div>
      { renderCells() }
    </div>
  );
}

export default CalendarRow;
