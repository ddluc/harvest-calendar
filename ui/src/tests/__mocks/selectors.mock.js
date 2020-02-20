import { getMockState }  from './state.mock.js'

export const mockGetMonthsInSeason = jest.fn(() => {
  return [
    { id: 3, label: 'March', key: 'MAR', season: [ 4, 1 ] },
    { id: 4, label: 'April', key: 'APR', season: [ 1 ] },
    { id: 5, label: 'May', key: 'MAY', season: [ 1 ] },
    { id: 6, label: 'June', key: 'JUN', season: [ 1, 2 ] }
  ];
});

export const mockBuildSegmentMap = jest.fn(() => {
  return [
    { id: 1, key: 'early', label: 'Early' },
    { id: 2, key: 'mid', label: 'Mid' },
    { id: 3, key: 'late', label: 'Late' }
  ];
});

export const mockBuildCellMap = jest.fn(() => {
  return { body:
     { 'MAR-1': 1,
       'MAR-2': 2,
       'MAR-3': 3,
       'APR-1': 4,
       'APR-2': 5,
       'APR-3': 6,
       'MAY-1': 7,
       'MAY-2': 8,
       'MAY-3': 9,
       'JUN-1': 10,
       'JUN-2': 11,
       'JUN-3': 12 },
    header: { MAR: 1, APR: 2, MAY: 3, JUN: 4 }
  };
});

export const mockFilterVegetables = jest.fn(() => {
  let mockAppState = getMockState();
  return mockAppState.marketData.vegetables;
});

export const mockSortVegetables = jest.fn(() => {
  let mockAppState = getMockState();
  return mockAppState.marketData.vegetables;
});
