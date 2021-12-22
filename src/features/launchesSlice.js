import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../utils/fetchSetup';

const initialState = {
  data: null,
  status: 'idle',
  error: null,
};

export const fetchAllLaunches = createAsyncThunk('getAll', async () => {
  const response = await client('launches/query', {
    method: 'POST',
    body: JSON.stringify({
      query: {
        upcoming: false,
      },
      options: {
        limit: 300,
        populate: [
          {
            path: 'launchpad',
            select: {
              locality: 1,
            },
          },
          {
            path: 'rocket',
            select: {
              name: 1,
            },
          },
          {
            path: 'payloads',
            select: {
              orbit: 1,
              type: 1,
            },
          },
          {
            path: 'cores.core',
            select: {
              serial: 1,
            },
          },
        ],
        sort: {
          date_unix: 'desc',
        },
      },
    }),
  });
  return response;
});

const allLaunchesSlice = createSlice({
  name: 'allLaunches',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllLaunches.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchAllLaunches.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  },
});

export default allLaunchesSlice.reducer;
