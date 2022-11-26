import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './HomePage/homePage';
import currencyDetailsReducer from './DetailsPage/detailsPage';

const store = configureStore({
  reducer: {
    homePage: currencyReducer,
    detailPage: currencyDetailsReducer,
  },
});

export default store;
