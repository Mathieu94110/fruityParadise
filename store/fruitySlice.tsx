import { fruityState } from '@/types';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://www.fruityvice.com/api/fruit';
// isLoader is set to true in order to fruits not found text doesnt appear on home page loading
const initialState = {
  data: [],
  isLoader: true,
  isError: false,
} as fruityState;

export const fetchAllFruity = createAsyncThunk('fetchAllFruity', async () => {
  const res = await fetch(`${baseURL}/all`);
  const allFruity = await res.json();
  return allFruity;
});

export const fruitySlice = createSlice({
  name: 'fruity',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllFruity.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });
    builder.addCase(fetchAllFruity.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});
export default fruitySlice.reducer;
