import { getMockMarketData } from '../__mocks/marketData.mock.js';

export const getMockState = () => {
  return {
    marketData: getMockMarketData(),
    appTitle: 'Harvest Calendar',
    searchInput: '',
    view: 'season',
    activeSeason: 1,
    activeMonth: 'MAY',
    activeSegment: 2,
    pricingMode: false
  }
};
