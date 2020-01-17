import React from 'react';
import { getMonthsInSeason } from '../services/UtilityService';

import '../styles/CalendarHeader.css'

function CalendarHeader({view, activeSeason, activeMonth, marketData}) {

  if (view === 'season') {
    const months = getMonthsInSeason(marketData.months, activeSeason);
    return (
      <div className="calendar-header">

        <div className="header-cell cell-1">Vegetable</div>
        {
          months.map((month, index) => {
            let cellIndex = index + 2;
            return (<div key={month.id} className={`header-cell cell-${cellIndex}`}>{month.label}</div>);
          })
        }
        <div className="sub-header-cell cell-1"></div>
        <div className="sub-header-cell cell-2">early</div>
        <div className="sub-header-cell cell-3">mid</div>
        <div className="sub-header-cell cell-4">late</div>
        <div className="sub-header-cell cell-5">early</div>
        <div className="sub-header-cell cell-6">mid</div>
        <div className="sub-header-cell cell-7">late</div>
        <div className="sub-header-cell cell-8">early</div>
        <div className="sub-header-cell cell-9">mid</div>
        <div className="sub-header-cell cell-10">late</div>
        <div className="sub-header-cell cell-11">early</div>
        <div className="sub-header-cell cell-12">mid</div>
        <div className="sub-header-cell cell-13">late</div>
      </div>
    );
  } else {
    return (
      <div className="calendar-header">
        <div className="header-cell"></div>
        <div className="sub-header-cell"></div>
      </div>
    )
  }

}

export default CalendarHeader;
