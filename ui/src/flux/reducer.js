/**
 * Reducer
 */

 export const initialState = {
   marketData: null,
   appTitle: 'Harvest Calendar',
   searchInput: '',
   view: 'season',
   activeSeason: 1,
   activeMonth: 'MAY',
   activeSegment: 2,
   pricingMode: '',
 };

 export const reducer = (state, action) => {
   switch (action.type) {
   case 'FETCH_MARKET_DATA':
     return {...state, marketData: action.payload };
    case 'SET_ACTIVE_SEASON':
      return {...state, activeSeason: action.payload, activeMonth: null, activeSegment: null };
    case 'APPLY_SEARCH_FILTER':
      return {...state, searchInput: action.payload };
   default:
     return {...state};
   }
 };
