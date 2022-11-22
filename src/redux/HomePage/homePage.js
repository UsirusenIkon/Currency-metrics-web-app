import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_CURRENCY = 'store/HomePage/FETCH_CURRENCY';

const fetchCurrency = createAsyncThunk(FETCH_CURRENCY, async () => {
  const response = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json');
  const currencies = await response.json();
  return currencies;
});

export default { fetchCurrency };
