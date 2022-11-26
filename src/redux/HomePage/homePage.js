import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const FETCH_CURRENCY = 'store/HomePage/FETCH_CURRENCY';

const fetchCurrency = createAsyncThunk(FETCH_CURRENCY, async () => {
  const response = await fetch(
    'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json',
  );
  const currencies = await response.json();
  const newArr = Object.keys(currencies).map((key, id) => ({ id, key: currencies[key] }));
  return newArr.slice(1, 12);
});

const currencySlice = createSlice({
  name: 'currency',
  initialState: [],
  reducers: {
    setCurrrency: (state, action) => ({
      ...state,
      currency: [...action.payload],
    }),
  },
  extraReducers: {
    [fetchCurrency.fulfilled]: (state, action) => action.payload,
  },
});

export default currencySlice.reducer;
export const { setCurrrency } = currencySlice.actions;
export { fetchCurrency };
