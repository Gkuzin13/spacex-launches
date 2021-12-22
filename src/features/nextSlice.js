import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../utils/fetchSetup';

const initialState = {
  data: null,
  status: 'idle',
  error: null,
};

export const fetchNextLaunch = createAsyncThunk('getNext', async () => {
  const response = await client('launches/next', {
    method: 'GET',
  });
  return response;
});

const nextLaunchSlice = createSlice({
  name: 'nextLaunch',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNextLaunch.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchNextLaunch.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  },
});

export default nextLaunchSlice.reducer;
