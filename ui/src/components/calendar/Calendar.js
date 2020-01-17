import React from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarRow from './CalendarRow';
import { Store } from '../../flux/store';
import { fetchMarketData } from '../../flux/actions';
import { getVegetablesInSeason, getMonthsInSeason, buildCellMap, sortVegetables } from '../../services/selectors';

import '../../styles/Calendar.scss'

function Calendar() {

  const { state, dispatch } = React.useContext(Store);
  React.useEffect(() => fetchMarketData(dispatch), [dispatch]);
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
