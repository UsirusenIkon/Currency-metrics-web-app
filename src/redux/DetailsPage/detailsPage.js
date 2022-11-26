import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const FETCH_CURRENCY_DETAILS = 'store/DetailsPage/FETCH_CURRENCY_DETAILS';

const fetchCurrencyDetails = createAsyncThunk(FETCH_CURRENCY_DETAILS, async (name) => {
  const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${name.short}.min.json`);
  const currencyDetails = await response.json();
  const detailsArr = Object.keys(currencyDetails).map((keys, id) => ({
    id,
    data: currencyDetails[keys],
    date: currencyDetails.date,
    name: name.full,
    prefix: name.short,
  }));
  return detailsArr.slice(1, 11);
});

const currencyDetailsSlice = createSlice({
  name: 'currencyDetails',
  initialState: [],
  reducers: {
    currrencyDetails: (state, action) => ({
      ...state,
      currency: [...action.payload],
    }),
  },
  extraReducers: {
    [fetchCurrencyDetails.fulfilled]: (state, action) => action.payload,
  },
});

export default currencyDetailsSlice.reducer;
export const { currencyDetails } = currencyDetailsSlice.actions;
export { fetchCurrencyDetails };
