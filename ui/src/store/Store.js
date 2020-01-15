import React from 'react';

const initialState = {
  appTitle: 'Harvest Calendar',
  searchInput: '',
  view: 'season',
  season: '',
  month: null,
  pricingMode: '',
};

const reducer = (state, action) => {
  const newState = {...state};
  switch (action.type) {
  case 'UPDATE_TITLE':
    newState.title = action.payload
    return state;
  default:
    return state;
  }
};

export const Store = React.createContext();

export const StoreProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>;
};
