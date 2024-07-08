import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from '../reducers/index';

const store = configureStore({
    reducer: {
        jobs: jobsReducer // jobsReducer è il reducer che gestirà le modifiche a jobs
    }
});

export default store;