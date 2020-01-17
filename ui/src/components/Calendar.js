import React, { useEffect } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarRow from './CalendarRow';
import { Store } from '../store/Store';
import { getVegetablesInSeason } from '../services/UtilityService';
import MarketAPIClient from '../services/MarketAPIClient';

import '../styles/Calendar.scss'

function Calendar() {

  const { state, dispatch } = React.useContext(Store);

  useEffect(() => {
    (async () => {
      const marketData =  await MarketAPIClient.getMarketData();
      dispatch({
        type: 'FETCH_MARKET_DATA',
        payload: marketData
      });
    })();
  }, [dispatch]);

  if (state.marketData !== null) {
    const vegetablesInSeason = getVegetablesInSeason(state.marketData.vegetables, state.marketData.months, state.activeSeason);
    return (
      <div className="calendar">
        <CalendarHeader
          marketData={state.marketData}
          view={state.view}
          activeSeason={state.activeSeason}
          activeMonth={state.activeMonth} />

        <div className="calendar-body">
          {
            vegetablesInSeason.map((vegetable) => {
              return <CalendarRow
                        key={vegetable.id}
                        vegetable={vegetable}
                        marketData={state.marketData}
                        view={state.view}
                        activeSeason={state.activeSeason}
                        activeMonth={state.activeMonth}
                        pricingMode={state.pricingMode} />
            })
          }
        </div>
      </div>
    );
  } else {
    return 'Loading...';
  }

}

export default Calendar;
