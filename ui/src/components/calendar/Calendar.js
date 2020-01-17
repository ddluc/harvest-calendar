import React, { useEffect } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarRow from './CalendarRow';
import { Store } from '../../store/Store';
import { getVegetablesInSeason, getMonthsInSeason, buildCellMap, sortVegetables } from '../../services/UtilityService';
import MarketAPIClient from '../../services/MarketAPIClient';

import '../../styles/Calendar.scss'

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

  // console.log(state.marketData);

  if (state.marketData !== null) {
    const sortedVegetablesInSeason = sortVegetables(state);
    const monthsInSeason = getMonthsInSeason(state);
    const cellMap = buildCellMap(state);
    return (
      <div className="calendar">
        <CalendarHeader
          months={monthsInSeason}
          cellMap={cellMap}
          view={state.view} />
        <div className="calendar-body">
          {
            sortedVegetablesInSeason.map((vegetable) => {
              return <CalendarRow key={vegetable.id} vegetable={vegetable} cellMap={cellMap}/>
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
