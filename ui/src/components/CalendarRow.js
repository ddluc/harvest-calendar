import React from 'react';
import { getMonthsInSeason } from '../services/UtilityService';

import '../styles/CalendarRow.css'

function CalendarRow({vegetable, marketData, view, activeSeason, activeMonth, pricingMode}) {

  const months = getMonthsInSeason(marketData.months, activeSeason);

  const renderCells = () => {
    let cells = [];
    const monthKeys = months.map((month) => month.key);
    vegetable.mPos.forEach((mPos) => {
      if (monthKeys.includes(mPos.month)){
        if (mPos.status === 'none' || mPos.status === 'off') {
          cells.push(<div className={`calendar-cell`}>—</div>);
        } else if (mPos.status === 'early') {
          cells.push(<div className={`calendar-cell`}>E</div>);
        } else if (mPos.status === 'peak') {
          cells.push(<div className={`calendar-cell`}>P</div>);
        } else if (mPos.status === 'late') {
          cells.push(<div className={`calendar-cell`}>L</div>);
        } else {
          cells.push(<div className={`calendar-cell`}>—</div>);
        }
      }
    });
    return cells;
  }

  return (
    <div className="calendar-row">
      <div className="calendar-cell cell-1">{vegetable.label}</div>
      { renderCells() }
    </div>
  );
}

export default CalendarRow;
