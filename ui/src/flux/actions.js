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
}
