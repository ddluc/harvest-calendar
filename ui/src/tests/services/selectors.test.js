import React from 'react';
import { getMockState } from '../__mocks/state.mock.js';

import {
  getMonthsInSeason,
  sortVegetables,
  filterVegetables,
  buildCellMap
} from '../../services/selectors';

describe('getMonthsInSeason', () => {

  let mockAppState = {};
  beforeEach(() => {
    mockAppState = getMockState();
  });

  it('it gets the months when activeSeason equals "spring" ', () => {
    expect(mockAppState).toBeDefined();
    mockAppState.activeSeason = 1;
     let monthsInSeason = getMonthsInSeason(mockAppState);
     expect(monthsInSeason[0].key).toEqual('MAR');
     expect(monthsInSeason[1].key).toEqual('APR');
     expect(monthsInSeason[2].key).toEqual('MAY');
     expect(monthsInSeason[3].key).toEqual('JUN');
  });

  it('it gets the months when activeSeason equals "summer" ', () => {
    expect(mockAppState).toBeDefined();
    mockAppState.activeSeason = 2;
     let monthsInSeason = getMonthsInSeason(mockAppState);
     expect(monthsInSeason[0].key).toEqual('JUN');
     expect(monthsInSeason[1].key).toEqual('JUL');
     expect(monthsInSeason[2].key).toEqual('AUG');
     expect(monthsInSeason[3].key).toEqual('SEP');
  });

  it('it gets the months when activeSeason equals "fall" ', () => {
    expect(mockAppState).toBeDefined();
    mockAppState.activeSeason = 3;
     let monthsInSeason = getMonthsInSeason(mockAppState);
     expect(monthsInSeason[0].key).toEqual('SEP');
     expect(monthsInSeason[1].key).toEqual('OCT');
     expect(monthsInSeason[2].key).toEqual('NOV');
     expect(monthsInSeason[3].key).toEqual('DEC');
  });

  it('it gets the months when activeSeason equals "winter" ', () => {
    expect(mockAppState).toBeDefined();
    mockAppState.activeSeason = 4;
     let monthsInSeason = getMonthsInSeason(mockAppState);
     expect(monthsInSeason[0].key).toEqual('DEC');
     expect(monthsInSeason[1].key).toEqual('JAN');
     expect(monthsInSeason[2].key).toEqual('FEB');
     expect(monthsInSeason[3].key).toEqual('MAR');
  });
});

describe('sortVegetables', () => {

    let mockAppState = {};
    beforeEach(() => {
      mockAppState = getMockState();

    });

    // The following tests are subject to fail if the data inventory is
    // updated with new data

    it('should sort the vegetables by availabilty in early June', () => {
      mockAppState.activeMonth = 'JUN';
      mockAppState.activeSegment = 1;
      let sortedVegetables = sortVegetables(mockAppState);
      expect(sortedVegetables[0].key).toEqual('asparagus');
      expect(sortedVegetables[13].key).toEqual('broccoli');
      expect(sortedVegetables[23].key).toEqual('arugula_raab');
    });

    it('should sort the vegetables by availabilty in late October', () => {
      mockAppState.activeMonth = 'OCT';
      mockAppState.activeSegment = 3;
      let sortedVegetables = sortVegetables(mockAppState);
      expect(sortedVegetables[0].key).toEqual('beet');
      expect(sortedVegetables[17].key).toEqual('arugula');
      expect(sortedVegetables[30].key).toEqual('garlic');
    });

    it('should sort the vegetables by availabilty in mid March', () => {
      mockAppState.activeMonth = 'MAR';
      mockAppState.activeSegment = 2;
      let sortedVegetables = sortVegetables(mockAppState);
      expect(sortedVegetables[0].key).toEqual('cabbage');
      expect(sortedVegetables[3].key).toEqual('nettles');
      expect(sortedVegetables[16].key).toEqual('garlic');
    });

});

describe('filterVegetables', () => {

  let mockAppState = {};
  beforeEach(() => {
    mockAppState = getMockState();

  });

  it('should filter the vegetables when the user enters a valid query', () => {
    mockAppState.searchInput = 'tomato';
    let filteredVegetables = filterVegetables(mockAppState);
    expect(filteredVegetables).toHaveLength(1);
    expect(filteredVegetables[0].key).toEqual('tomato');
  });

  it('should filter the vegetables when the user enters a partial query > 2 characters', () => {
    mockAppState.searchInput = 'cha';
    let filteredVegetables = filterVegetables(mockAppState);
    expect(filteredVegetables).toHaveLength(2);
    expect(filteredVegetables[0].key).toEqual('chanterelle');
    expect(filteredVegetables[1].key).toEqual('swiss_chard');
  });

  it('should ignore case when filtering vegetables', () => {
    mockAppState.searchInput = 'tOmAtO';
    let filteredVegetables = filterVegetables(mockAppState);
    expect(filteredVegetables).toHaveLength(1);
    expect(filteredVegetables[0].key).toEqual('tomato');
  });

  it('should not filter if the query is 2 or less characters', () => {
    mockAppState.searchInput = 'to';
    let filteredVegetables = filterVegetables(mockAppState);
    expect(filteredVegetables).toHaveLength(mockAppState.marketData.vegetables.length);
  });

  it('should use the overrided list, if provided', () => {
    let vegetables = [];
    mockAppState.searchInput = 'tomato';
    let filteredVegetables = filterVegetables(mockAppState, vegetables);
    expect(filteredVegetables).toHaveLength(0);
  });

});


describe('buildCellMap', () => {

  let mockAppState = {};
  beforeEach(() => {
    mockAppState = getMockState();

  });

  const segments = [
    {id: 1, key: 'early', label: 'Early'},
    {id: 2, key: 'mid', label: 'Mid', },
    {id: 3, key: 'late', label: 'Late'}
  ];

  it('should build the cell map for spring', () => {
    const monthsInSeason = [
      { id: 3, label: 'March', key: 'MAR', season: [ 4, 1 ] },
      { id: 4, label: 'April', key: 'APR', season: [ 1 ] },
      { id: 5, label: 'May', key: 'MAY', season: [ 1 ] },
      { id: 6, label: 'June', key: 'JUN', season: [ 1, 2 ] }
    ];
    const cellMap = buildCellMap(mockAppState, monthsInSeason, segments);
    expect(cellMap.body['MAR-1']).toEqual(1);
    expect(cellMap.body['APR-2']).toEqual(5);
    expect(cellMap.body['MAY-3']).toEqual(9);
    expect(cellMap.header).toEqual({ MAR: 1, APR: 2, MAY: 3, JUN: 4 });
  });

  it('should build the cell map for fall', () => {
    const monthsInSeason = [
      { id: 9, label: 'September', key: 'SEP', season: [ 2, 3 ] },
      { id: 10, label: 'October', key: 'OCT', season: [ 3 ] },
      { id: 11, label: 'November', key: 'NOV', season: [ 3 ] },
      { id: 12, label: 'December', key: 'DEC', season: [ 3, 4 ] }
    ]
    const cellMap = buildCellMap(mockAppState, monthsInSeason, segments);
    expect(cellMap.body['SEP-1']).toEqual(1);
    expect(cellMap.body['OCT-2']).toEqual(5);
    expect(cellMap.body['NOV-3']).toEqual(9);
    expect(cellMap.body['DEC-3']).toEqual(12)
    expect(cellMap.header).toEqual({ SEP: 1, OCT: 2, NOV: 3, DEC: 4 });
  });

  it('should build the cell map for winter', () => {
    const monthsInSeason = [
      { id: 12, label: 'December', key: 'DEC', season: [ 3, 4 ] },
      { id: 1, label: 'January', key: 'JAN', season: [ 4 ] },
      { id: 2, label: 'February', key: 'FEB', season: [ 4 ] },
      { id: 3, label: 'March', key: 'MAR', season: [ 4, 1 ] }
    ];
    const cellMap = buildCellMap(mockAppState, monthsInSeason, segments);
    expect(cellMap.body['DEC-1']).toEqual(1);
    expect(cellMap.body['JAN-2']).toEqual(5);
    expect(cellMap.body['FEB-3']).toEqual(9);
    expect(cellMap.body['MAR-3']).toEqual(12)
    expect(cellMap.header).toEqual({ DEC: 1, JAN: 2, FEB: 3, MAR: 4 });
  });


});
