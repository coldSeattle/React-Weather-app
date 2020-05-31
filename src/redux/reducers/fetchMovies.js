import { FETCH_MOVIES_START, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR, FILTER_MOVIES, GENRE_IS_FALSE } from "../actions/actions"

const initialState = {
    movies: [],
    isLoading: false,
    error: null,
    with_genres: []
}

const moviesReduer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_MOVIES_START:
            return {...state,isLoading: true}
        case FETCH_MOVIES_SUCCESS:
            return {...state, isLoading: false, movies: action.payload  }
        case FETCH_MOVIES_ERROR:
            return {...state, error: action.payload}
        case FILTER_MOVIES:
            return { ...state, with_genres: [...state.with_genres, action.payload] }
        case GENRE_IS_FALSE:
            return { with_genres: state.with_genres.filter(genre => genre !== action.payload) }
        default:
            return state
    }
}

export default moviesReduer