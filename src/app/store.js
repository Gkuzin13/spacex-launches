import { configureStore } from '@reduxjs/toolkit';
import nextReducer from '../features/nextSlice';
import latestReducer from '../features/latestSlice';
import allReducer from '../features/launchesSlice';

export default configureStore({
  reducer: {
    nextLaunch: nextReducer,
    latestLaunch: latestReducer,
    allLaunches: allReducer,
  },
});
