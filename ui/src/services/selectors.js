/**
 * Utility Methods
 **/

/**
 * getMonthsInSeason
 * @description gets the months for the active season
 * @param <Object> state - application state
 * @return <Object> monthsInSeason - the month objects
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
  // maps the month objects to the display order keys
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
  let off = [];
  let none = [];
  let vegetables = marketData.vegetables.sort((a, b) => (a.category.label < b.category.label) ? -1 : 1); 
  if (activeSegment) {
    vegetables.forEach((vegetable) => {
      vegetable.mPos.forEach((mPos) => {
        if (`${mPos.month}-${mPos.segment}` === `${activeMonth}-${activeSegment}` ) {
          if ( mPos.status === 'peak') peak.push(vegetable);
          if ( mPos.status === 'early' || mPos.status === 'late' || mPos.status === 'off') off.push(vegetable);
          if ( mPos.status === 'none') none.push(vegetable);
        }
      });
    });
    let sortedVegetables = [...peak, ...off, ...none ];
    return sortedVegetables;
  } else {
    return marketData.vegetables;
  }
};

/**
 * filterVegetables
 * @description filters the vegetables to the user's search query
 * @param <Object> state - application state
 * @returns <Array> vegetables — optional array specifying the list to filter
 */
export const filterVegetables = (state, list) => {
  let { vegetables }  = state.marketData;
  if (list) {
    vegetables = list;
  }
  let { searchInput } = state;
  if (searchInput !== '' && searchInput.length > 2) {
    let filteredVegetables = [];
    vegetables.forEach((veg) => {
      let formattedLabel = veg.label.toLowerCase();
      let formattedCategory = veg.category.label.toLowerCase(); 
      let formattedInput = searchInput.trim().toLowerCase();
      if (formattedLabel.includes(formattedInput)|| formattedCategory.includes(formattedInput) ) {
        filteredVegetables.push(veg);
      } else if (formattedInput.includes(formattedLabel) || formattedInput.includes(formattedCategory) ) {
        filteredVegetables.push(veg);
      }
    });
    return filteredVegetables;
  } else {
    return vegetables;
  }
}

/**
 * buildCellMap
 * @description maps the market data to the css grid
 * @param <Object> state - application state
 */
export const buildCellMap = (state, months, segments) => {
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
