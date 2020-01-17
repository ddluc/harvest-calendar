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
