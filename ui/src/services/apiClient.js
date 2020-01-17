/**
 * API Client
 */

import axios from 'axios';

const getBaseURL = () => {
  return 'http://localhost:3300';
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
