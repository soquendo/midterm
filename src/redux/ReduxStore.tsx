import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { clearCart } from './actions/cartActions';
import cartReducer from './reducers/cartReducer';
import React from 'react';

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

function ReduxStore({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { clearCart };
export default ReduxStore;
