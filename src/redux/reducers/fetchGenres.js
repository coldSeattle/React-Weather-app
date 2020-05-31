import { FETCH_GENRES_START, FETCH_GENRES_SUCCESS, FETCH_GENRES_ERROR } from "../actions/actions"

const initialState = {
    genres: [],
    isLoading: false,
    error: null
}

const genresReduer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_GENRES_START:
            return {isLoading: true}
        case FETCH_GENRES_SUCCESS:
            return { isLoading: false, genres: action.payload  }
        case FETCH_GENRES_ERROR:
        return {error: action.payload}
        default:
            return state
    }
}

export default genresReduer