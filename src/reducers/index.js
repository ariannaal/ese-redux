const initialState = {
    jobs: [],
    favourites: [],
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_JOBS':
            return {
                ...state,
                jobs: action.payload,
            };
        case 'ADD_TO_FAVOURITE':
            return {
                ...state,
                favourites: [...state.favourites, action.payload],
            };
        case 'REMOVE_FROM_FAVOURITE':
            return {
                ...state,
                favourites: state.favourites.filter((fav) => fav !== action.payload),
            };
        default:
            return state;
    }
};

// Action creators
export const setJobs = (jobs) => ({
    type: 'SET_JOBS',
    payload: jobs,
});

export const addToFavourites = (company) => ({
    type: 'ADD_TO_FAVOURITE',
    payload: company,
});

export const removeFromFavourites = (company) => ({
    type: 'REMOVE_FROM_FAVOURITE',
    payload: company,
});

export default mainReducer;


