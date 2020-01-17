/**
 * Utility Methods
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
  let order = [];
  switch (activeSeason) {
    // Spring
    case 1:
      order = ['MAR', 'APR', 'MAY', 'JUN'];
      break;
    // Summer
    case 2:
      order = ['JUN', 'JUL', 'AUG', 'SEP'];
      break;
    // Fall
    case 3:
      order = ['SEP', 'OCT', 'NOV', 'DEC'];
      break;
    // Winter
    case 4:
      order = ['DEC', 'JAN', 'FEB', 'MAR'];
      break;
    default:
      order = ['MAR', 'APR', 'MAY', 'JUN'];
  }
  order.forEach((key) => {
    months.forEach((month) => {
      if (month.key === key) {
        monthsInSeason.push(month);
      }
    });
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

export const buildCellMap = (state) => {
  const segments = buildSegmentMap();
  const months = getMonthsInSeason(state);
  let cellMap = {body: {}, header: {}};
  let bodyCellIndex = 1;
  let headerCellIndex = 1;
  months.forEach((month) => {
    cellMap.header[month.key] = headerCellIndex;
    headerCellIndex++;
    segments.forEach((segment) => {
      let key = `${month.key}-${segment.id}`;
      cellMap.body[key] = bodyCellIndex;
      bodyCellIndex++;
    });
   });
  return cellMap;
}

export const buildSegmentMap = () => {
  const segments = [
    {id: 1, key: 'early', label: 'Early'},
    {id: 2, key: 'mid', label: 'Mid', },
    {id: 3, key: 'late', label: 'Late'}
  ];
  return segments;
};
