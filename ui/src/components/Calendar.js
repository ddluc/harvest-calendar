import React from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarRow from './CalendarRow';

import '../styles/Calendar.css'

function Calendar() {
  return (
    <div className="calendar">
      <CalendarHeader />
      <div className="calendar-body">
        <CalendarRow name="Garlic" />
        <CalendarRow name="Onion" />
        <CalendarRow name="Carrot" />
        <CalendarRow name="Cabbage" />
        <CalendarRow name="Swiss Chard" />
        <CalendarRow name="Kale" />
        <CalendarRow name="Chanterelle" />
        <CalendarRow name="Spinach" />
        <CalendarRow name="Turnip"/>
        <CalendarRow name="Winter Squash"/>
        <CalendarRow name="Tomato"/>
        <CalendarRow name="Red Pepper"/>
        <CalendarRow name="Nettles" />
      </div>
    </div>
  );
}

export default Calendar;
