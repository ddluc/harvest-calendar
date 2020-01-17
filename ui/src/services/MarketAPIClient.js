import axios from 'axios';

// TODO: Convert MarketAPIClient to a functional implementation from a class-based implementation 
class MarketAPIClient {

  constructor() {
    this.baseUrl = 'http://localhost:3300';
  }

  async getMarketData () {
    const url = `${this.baseUrl}/api/market_data`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

}

export default new MarketAPIClient();
