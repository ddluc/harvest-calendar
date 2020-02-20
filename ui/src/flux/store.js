/**
 * Store
 */

import React from 'react';
import { initialState, reducer } from './reducer';

const Store = React.createContext();
export default Store;

export const StoreProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>;
};

// Custom hook to use store context for testability purposes
// https://github.com/airbnb/enzyme/issues/2176#issuecomment-507462912
export const useStore = () => React.useContext(Store);
