import React from 'react';

import '../styles/CalendarRow.css'

function CalendarRow({name}) {
  console.log(name)
  return (
    <div className="calendar-row">
      <div className="calendar-cell cell-1">{name}</div>
      <div className="calendar-cell cell-2">X</div>
      <div className="calendar-cell cell-3">X</div>
      <div className="calendar-cell cell-4">X</div>
      <div className="calendar-cell cell-5">X</div>
      <div className="calendar-cell cell-6">X</div>
      <div className="calendar-cell cell-7">X</div>
      <div className="calendar-cell cell-8">X</div>
      <div className="calendar-cell cell-9">X</div>
      <div className="calendar-cell cell-10">X</div>
      <div className="calendar-cell cell-11">X</div>
      <div className="calendar-cell cell-12">X</div>
      <div className="calendar-cell cell-13">X</div>
    </div>
  );
}

export default CalendarRow;
