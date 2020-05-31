import { FETCH_MOVIES_START, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from "../actions/actions"

const initialState = {
    movies: [],
    isLoading: false,
    error: false
}

const moviesReduer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_MOVIES_START:
            return {isLoading: true}
        case FETCH_MOVIES_SUCCESS:
            return { isLoading: false, movies: action.payload  }
        case FETCH_MOVIES_ERROR:
        return {error: true}
        default:
            return state
    }
}

export default moviesReduer