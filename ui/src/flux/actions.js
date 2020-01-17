/**
 * Actions
 */

import { getMarketData } from '../services/apiClient';

export const fetchMarketData = async (dispatch) => {
    const marketData =  await getMarketData();
    return dispatch({
      type: 'FETCH_MARKET_DATA',
      payload: marketData
    });
};

export const setActiveSeason = (dispatch, season) => {
  dispatch({
    type: 'SET_ACTIVE_SEASON',
    payload: season
  });
}

export const setActiveSegment = (dispatch, month, segment) => {
  dispatch({
    type: 'SET_ACTIVE_SEGMENT',
    payload: {segment: segment.id, month: month.key}
  })
}

export const setPricingMode = (dispatch, mode) => {
  dispatch({
    type: 'SET_PRICING_MODE',
    payload: mode
  })
}

export const applySearchFilter = (dispatch, userInput) => {
  dispatch({
    type: 'APPLY_SEARCH_FILTER',
    payload: userInput
  });
}
