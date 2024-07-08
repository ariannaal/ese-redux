export const SET_JOBS = 'SET_JOBS';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';

export const setJobs = (jobs) => ({
    type: SET_JOBS,
    payload: jobs
});

export const addToFavorites = (job) => ({
    type: ADD_TO_FAVORITES,
    payload: job
});