/** Utility Methods **/

export const getMonthsInSeason = (months, season) => {
  let monthsInSeason = [];
  months.forEach((month) => {
    if (month.season.includes(season)) {
      monthsInSeason.push(month);
    }
  });
  return monthsInSeason;
}


export const getVegetablesInSeason = (vegetables, months, season) => {
  let vegetablesInSeason = [];
  const monthsInSeason = getMonthsInSeason(months, season);
  const monthKeys = monthsInSeason.map((month) => month.key);
  vegetables.forEach((vegetable) => {
    let mPosCount = 0;
    vegetable.mPos.forEach((mPos) => {
      if (monthKeys.includes(mPos.month)){
        if (mPos.status !== 'none') {
          mPosCount = mPosCount + 1;
        }
      }
    });
    if (mPosCount > 0) {
      vegetablesInSeason.push({ ...vegetable, mPosCount: mPosCount})
    }
  });
  vegetablesInSeason.sort((a, b) => b.mPosCount - a.mPosCount);
  return vegetablesInSeason;
}
