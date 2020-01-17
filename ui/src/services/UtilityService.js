/**
 * Utility Methods
 * (i.e) Selectors
 **/

/**
 * getMonthsInSeason
 * @description gets the months for the active season
 * @param <Array> months — array of months
 * @param <Number> season — the id of the active season (1,2,3,4)
 */
export const getMonthsInSeason = (months, season) => {
  let monthsInSeason = [];
  months.forEach((month) => {
    if (month.season.includes(season)) {
      monthsInSeason.push(month);
    }
  });
  return monthsInSeason;
};

/**
 * getVegetablesInSeason
 * @description gets the vegetables for the active season
 * @param <Array> vegetables - array of vegetable objects
 * @param <Array> months — array of months
 * @param <Number> season — the id of the active season (1,2,3,4)
 */
export const getVegetablesInSeason = (vegetables, months, season) => {
  let vegetablesInSeason = [];
  const monthsInSeason = getMonthsInSeason(months, season);
  const monthKeys = monthsInSeason.map((month) => month.key);
  vegetables.forEach((vegetable) => {
    let inSeason = false;
    vegetable.mPos.forEach((mPos) => {
      if (monthKeys.includes(mPos.month)){
        if (mPos.status !== 'none') {
          inSeason = true;
        }
      }
    });
    if (inSeason) {
      vegetablesInSeason.push({ ...vegetable})
    }
  });
  vegetablesInSeason.sort((a, b) => b.mPosCount - a.mPosCount);
  return vegetablesInSeason;
};

/**
 * sortVegetablesByScore
 * @description sorts the vegetables by custom algorithm to determine how in season it is
 * @param <Array> vegetables - array of vegetable objects
 * @param <Array> months — array of months
 * @param <Number> season — the id of the active season (1,2,3,4)
 */
export const sortVegetables = (vegetables, months, season) => {
  let vegetablesInSeason = [];
  const monthsInSeason = getMonthsInSeason(months, season);
  const monthKeys = monthsInSeason.map((month) => month.key);
  vegetables.forEach((vegetable) => {
    let inSeason = false;
    vegetable.mPos.forEach((mPos) => {
      if (monthKeys.includes(mPos.month)){
        if (mPos.status !== 'none') {
          inSeason = true;
        }
      }
    });
    if (inSeason) {
      vegetablesInSeason.push({ ...vegetable})
    }
  });
  vegetablesInSeason.sort((a, b) => b.mPosCount - a.mPosCount);
  return vegetablesInSeason;
};

/**
 * buildCellMap
 * @description maps css grid cell indexes to month/segment
 * @param <Array> months — array of months
 * @param <Number> season — the id of the active season (1,2,3,4)
 * @returns <Object> cellMap — a map of cell indexes
 */
export const buildCellMap = (months, season) => {
  let cellMap = {body: {}, header: {}};
  let bodyCellIndex = 1;
  let headerCellIndex = 1;
  let segments = buildSegmentMap();
  let monthsInSeason = getMonthsInSeason(months, season);
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
