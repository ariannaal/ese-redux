const SET_JOBS = 'SET_JOBS';

// azioni
export const setJobs = (jobs) => ({
    type: SET_JOBS,
    payload: jobs
});


export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';

export function addToFavorites(company) { //payload impostato come su oggetto company
    return {
        type: ADD_TO_FAVORITES,
        payload: company
    };
}

// stato iniziale
const initialState = {
    list: []
};

// reducer
const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_JOBS:
            return {
                ...state,
                list: action.payload
            };
        default:
            return state;
    }
};

export default jobsReducer;



