/**
 * API Client
 */

import axios from 'axios';

const getBaseURL = () => {
  let baseURL = '';
  if (document.location.hostname === 'localhost') {
    baseURL = 'http://localhost:3300';
  } else {
    baseURL = 'http://harvestapp.ddluc.com';
  }
  return baseURL;
}

export const getMarketData = async () => {
  const url = `${getBaseURL()}/api/market_data`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
