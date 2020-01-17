/**
 * Utility Methods
 * TODO: rename selectors.js to selectors 
 **/

/**
 * getMonthsInSeason
 * @description gets the months for the active season
 * @param <Object> state - application state
 */
export const getMonthsInSeason = (state) => {
  let { months } = state.marketData;
  let { activeSeason } = state;
  let monthsInSeason = [];
  months.forEach((month) => {
    if (month.season.includes(activeSeason)) {
      monthsInSeason.push(month);
    }
  });
  return monthsInSeason;
};


/**
 * sortVegetables
 * @description sorts the vegetables by custom algorithm to determine how in season it is
 * @param <Object> state - application state
 */
export const sortVegetables = (state) => {
  let {marketData, activeMonth, activeSegment} = state;
  let peak = [];
  let early = [];
  let late = [];
  let off = [];
  let none = [];
  marketData.vegetables.forEach((vegetable) => {
    vegetable.mPos.forEach((mPos) => {
      if (`${mPos.month}-${mPos.segment}` === `${activeMonth}-${activeSegment}` ) {
        if ( mPos.status === 'peak') peak.push(vegetable);
        if ( mPos.status === 'early') early.push(vegetable);
        if ( mPos.status === 'late') late.push(vegetable);
        if ( mPos.status === 'off') off.push(vegetable);
        if ( mPos.status === 'none') none.push(vegetable);
      }
    });
  });
  let sortedVegetables = [...peak, ...early, ...late, ...off, ...none ];
  return sortedVegetables;
};

/**
 * buildCellMap
 * @description maps css grid cell indexes to month/segment
 * @param <Object> state - application state
 * @returns <Object> cellMap — a map of cell indexes
 */
export const buildCellMap = (state) => {
  let cellMap = {body: {}, header: {}};
  let bodyCellIndex = 1;
  let headerCellIndex = 1;
  let segments = buildSegmentMap();
  let monthsInSeason = getMonthsInSeason(state);
  monthsInSeason.forEach((month) => {
    cellMap.header[month.key] = headerCellIndex;
    headerCellIndex++;
    segments.forEach((segment) => {
      let key = `${month.key}-${segment.id}`;
      cellMap.body[key] = bodyCellIndex;
      bodyCellIndex++;
    });
   });
  return cellMap;
};


/**
 * buildSegmentMap
 * @description builds a statuc segment array
 * @returns <Array> segment
 */
export const buildSegmentMap = () => {
  const segments = [
    {id: 1, key: 'early', label: 'Early'},
    {id: 2, key: 'mid', label: 'Mid', },
    {id: 3, key: 'late', label: 'Late'}
  ];
  return segments;
};
