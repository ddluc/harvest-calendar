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
     return {...state, marketData: action.payload }
   default:
     return {...state};
   }
 };
