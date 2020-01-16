import React, { useEffect } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarRow from './CalendarRow';
import { Store } from '../store/Store';
import MarketAPIClient from '../services/MarketAPIClient';

import '../styles/Calendar.scss'

function Calendar() {

  const { state, dispatch } = React.useContext(Store);

  const loadMarketData = async () => {
    const marketData =  await MarketAPIClient.getMarketData();
    dispatch({
      type: 'FETCH_MARKET_DATA',
      payload: marketData
    });
  };

  useEffect(() => {
    loadMarketData();
  }, [-1]);

  if (state.marketData !== null) {
    return (
      <div className="calendar">
        <CalendarHeader />
        <div className="calendar-body">
          {
            state.marketData.vegetables.map((vegetable) => {
              return <CalendarRow key={vegetable.id} vegetable={vegetable} />
            })
          }
        </div>
      </div>
    );
  } else {
    return '...loading';
  }

}

export default Calendar;
