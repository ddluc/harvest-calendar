import React from 'react';
import {cloneDeep} from  'lodash';

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
  const newState = cloneDeep(state);
  switch (action.type) {
  case 'FETCH_MARKET_DATA':
    newState.marketData = action.payload
    return newState;
  default:
    return newState;
  }
};

export const Store = React.createContext();

export const StoreProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>;
};
