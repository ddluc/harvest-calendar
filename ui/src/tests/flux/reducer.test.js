import React from 'react';
import { shallow } from 'enzyme';
import * as apiClient from '../../services/apiClient';
import { reducer, initialState } from '../../flux/reducer';
import { getMockMarketData } from '../__mocks/api.mock.js';

describe('reducer', () => {

  it('should update the state in response to the FETCH_MARKET_DATA action', () => {
    let payload = {};
    let state =  { ... initialState};
    let action = { type: 'FETCH_MARKET_DATA', payload };
    let newState = reducer(state, action);
    expect(newState.marketData).toEqual(payload);
    // Ensures immutabilty
    expect(state).toEqual(initialState);
  });

  it('should update the state in response to the SET_ACTIVE_SEASON action', () => {
    let payload = {};
    let state =  { ... initialState};
    let action = { type: 'SET_ACTIVE_SEASON', payload };
    let newState = reducer(state, action);
    expect(newState.activeSeason).toEqual(payload);
    expect(newState.activeMonth).toEqual(null);
    expect(newState.activeSegment).toEqual(null);
    // Ensures immutabilty
    expect(state).toEqual(initialState);
  });

  it('should update the state in response to the SET_ACTIVE_SEGMENT action', () => {
    let payload = { month: 'MAR', segment: 1};
    let state = { ...initialState };
    let action = { type: 'SET_ACTIVE_SEGMENT', payload };
    let newState = reducer(state, action);
    expect(newState.activeSegment).toEqual(payload.segment);
    // Ensures immutabilty
    expect(state).toEqual(initialState);
  });

  it('should update the state in response to the SET_PRICING_MODE action', () => {
    let payload = {};
    let state = { ...initialState };
    let action = {type: 'SET_PRICING_MODE', payload};
    let newState = reducer(state, action);
    expect(newState.pricingMode).toEqual(payload);
    // Ensures immutabilty
    expect(state).toEqual(initialState);
  });

  it('should update the state in response to the APPLY_SEARCH_FILTER action', () => {
    let payload = {};
    let state = { ...initialState };
    let action = {type: 'APPLY_SEARCH_FILTER', payload};
    let newState = reducer(state, action);
    expect(newState.searchInput).toEqual(payload);
    // Ensures immutabilty
    expect(state).toEqual(initialState);
  });

})
