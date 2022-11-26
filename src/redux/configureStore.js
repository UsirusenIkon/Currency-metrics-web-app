import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './HomePage/homePage';

const store = configureStore({
  reducer: {
    homePage: currencyReducer,
  },
});

export default store;
