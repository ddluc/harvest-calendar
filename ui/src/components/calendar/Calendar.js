import React from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarRow from './CalendarRow';
import { Store } from '../../flux/store';
import { fetchMarketData } from '../../flux/actions';
import { getMonthsInSeason, sortVegetables, filterVegetables, buildSegmentMap} from '../../services/selectors';
import { buildCellMap } from '../../services/selectors';

import '../../styles/Calendar.scss'

function Calendar() {

  const { state, dispatch } = React.useContext(Store);
  React.useEffect(() => { fetchMarketData(dispatch) }, []);
  if (state.marketData !== null) {
    let vegetables = sortVegetables(state);
    vegetables = filterVegetables(state, vegetables);
    const monthsInSeason = getMonthsInSeason(state);
    const segmentMap = buildSegmentMap();
    const cellMap = buildCellMap(state, monthsInSeason, segmentMap);
    return (
      <div className="calendar">
        <CalendarHeader
          months={monthsInSeason}
          cellMap={cellMap}
          segmentMap={segmentMap} />
        <div className="calendar-body">
          {

            vegetables.map((vegetable, index) => {
              return <CalendarRow
                        rowIndex={index}
                        key={vegetable.id}
                        vegetable={vegetable}
                        cellMap={cellMap}
                        months={monthsInSeason} />
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
