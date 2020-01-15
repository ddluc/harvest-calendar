import React from 'react';

import '../styles/CalendarHeader.css'

function CalendarHeader() {
  return (
    <div className="calendar-header">

      { /** Main Header **/ }
      <div className="header-cell cell-1">Vegetable</div>
      <div className="header-cell cell-2">May</div>
      <div className="header-cell cell-3">June</div>
      <div className="header-cell cell-4">July</div>
      <div className="header-cell cell-5">Aug</div>

      { /** Sub Header **/ }
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
}

export default CalendarHeader;
