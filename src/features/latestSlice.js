import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../utils/fetchSetup';

const initialState = {
  data: null,
  status: 'idle',
  error: null,
};

export const fetchLatestLaunch = createAsyncThunk('getLatest', async () => {
  const response = await client('launches/latest', {
    method: 'GET',
  });
  return response;
});

const latestLaunchSlice = createSlice({
  name: 'latestLaunch',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchLatestLaunch.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchLatestLaunch.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  },
});

export default latestLaunchSlice.reducer;
