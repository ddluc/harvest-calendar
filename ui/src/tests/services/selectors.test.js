import React from 'react';
import { getMockState } from '../__mocks/state.mock.js';

import { getMonthsInSeason, sortVegetables} from '../../services/selectors';

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
