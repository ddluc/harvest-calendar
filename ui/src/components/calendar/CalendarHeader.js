import React from 'react';
import { getMonthsInSeason, buildSegmentMap } from '../../services/cellMap';

import '../../styles/CalendarHeader.css'

function CalendarHeader({view, cellMap, months}) {

  if (view === 'season') {

    const renderHeader = () => {
      const segmentMap = buildSegmentMap();
      return months.map((month, index) => {
        let cellIndex = cellMap.header[month.key];
        let id = `header-month-${month.key}`;
        return (<div key={month.id} id={id} className={`header-cell cell-${cellIndex}`}>{month.label}</div>);
      })
    };

    return (
      <div className="calendar-header">

        <div className="header-cell label-cell">Vegetable</div>
        { renderHeader() }
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
