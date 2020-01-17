/**
 * Actions
 */

import MarketAPIClient from '../services/MarketAPIClient';

export const fetchMarketData = async (dispatch) => {
    const marketData =  await MarketAPIClient.getMarketData();
    return dispatch({
      type: 'FETCH_MARKET_DATA',
      payload: marketData
    });
}
