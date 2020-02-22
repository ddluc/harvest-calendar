import React from 'react';
import { shallow } from 'enzyme';
import * as apiClient from '../../services/apiClient';
import {
  fetchMarketData,
  setActiveSeason,
  setActiveSegment,
  setPricingMode,
  applySearchFilter
} from '../../flux/actions';
import { getMockMarketData } from '../__mocks/api.mock.js';


describe('fetchMarketData', () => {

  let mockDispatch = jest.fn(() => true);
  let mockGetMarketData = jest.fn(() => getMockMarketData() );

  it('should fetch the market data via the apiClient', async () => {
    jest.spyOn(apiClient, 'getMarketData').mockImplementation(mockGetMarketData);
    await fetchMarketData(mockDispatch);
    expect(mockGetMarketData).toHaveBeenCalled();
    jest.clearAllMocks();
  });

  it('should dispatch the FETCH_MARKET_DATA action with correct payload', async () => {
    await fetchMarketData(mockDispatch);
    let action = {"payload": getMockMarketData(), "type": "FETCH_MARKET_DATA"};
    expect(mockDispatch).toHaveBeenCalledWith(action);
    jest.clearAllMocks();
  });

});

describe('setActiveSeason', () => {

  let mockDispatch = jest.fn(() => true);

  it('should dispatch the SET_ACTIVE_SEASON action with the correct payload', async () => {
    let season = 1;
    let action = {"payload": season, "type": "SET_ACTIVE_SEASON"};
    await setActiveSeason(mockDispatch, season);
    expect(mockDispatch).toHaveBeenCalledWith(action);
    jest.clearAllMocks();
  });

});


describe('setActiveSegment', () => {

  let mockDispatch = jest.fn(() => true);

  it('should dispatch the SET_ACTIVE_SEGMENT action with the correct payload', async () => {
      let month = {key: 'MAR', label: 'March'};
      let segment = { id: 1 };
      let action = { payload: {segment: segment.id, month: month.key}, type: 'SET_ACTIVE_SEGMENT' };
      await setActiveSegment(mockDispatch, month, segment);
      expect(mockDispatch).toHaveBeenCalledWith(action);
      jest.clearAllMocks();
  });

});


describe('setPricingMode', () => {

  let mockDispatch = jest.fn(() => true);

  it('should dispatch the SET_PRICING_MODE action with the correct payload', async () => {
    let mode = 'on';
    let action = { payload: mode, type: 'SET_PRICING_MODE' };
    await setPricingMode(mockDispatch, mode);
    expect(mockDispatch).toHaveBeenCalledWith(action);
    jest.clearAllMocks();
  });

})

describe('applySearchFilter', () => {

  let mockDispatch = jest.fn(() => true);

  it('should dispatch the action', async () => {
    let userInput = 'hello';
    let action = {payload: userInput, type: 'APPLY_SEARCH_FILTER'};
    await applySearchFilter(mockDispatch, userInput);
    expect(mockDispatch).toHaveBeenCalledWith(action);
    jest.clearAllMocks();
  });

});
