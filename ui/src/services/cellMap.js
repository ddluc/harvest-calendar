/**
 * Maps the market data to the grid cells
 */

export const buildCellMap = (activeSeason) => {

  let months = [];
  switch (activeSeason) {
    case 1:
      months = ['MAR', 'APR', 'MAY', 'JUN'];
      break;
    case 2:
      months = ['JUN', 'JUL', 'AUG', 'SEP'];
      break;
    case 3:
      months = ['SEP', 'OCT', 'NOV', 'DEC'];
      break;
    case 4:
      months = ['DEC', 'JAN', 'FEB', 'MAR'];
      break;
    default:
      months = ['MAR', 'APR', 'MAY', 'JUN'];
  }

  let cellMap = {body: {}, header: {}};
  let bodyCellIndex = 1;
  let headerCellIndex = 1;
  let segments = buildSegmentMap();
  months.forEach((month) => {
    cellMap.header[month] = headerCellIndex;
    headerCellIndex++;
    segments.forEach((segment) => {
      let key = `${month}-${segment.id}`;
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
