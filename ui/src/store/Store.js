import React from 'react';

const initialState = {
  marketData: null,
  appTitle: 'Harvest Calendar',
  searchInput: '',
  view: 'season',
  season: '',
  month: null,
  pricingMode: '',
};

const reducer = (state, action) => {
  switch (action.type) {
  case 'FETCH_MARKET_DATA':
    return {...state, marketData: action.payload }
  default:
    return {...state};
  }
};

export const Store = React.createContext();

export const StoreProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>;
};
