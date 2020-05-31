import axios from 'axios'
import { BASE_URL, GENRES, API_KEY, MOVIES, FILTERS } from '../../utils/api'
import queryString from 'query-string'

export const FETCH_MOVIES_START = 'FETCH_MOVIES_START'
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS'
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR'

export const fetchMoviesSuccess = payload => ({
    type: FETCH_MOVIES_SUCCESS,
    payload
})

export const fetchMoviesError = payload => ({
    type: FETCH_MOVIES_ERROR,
    payload
})

export const fetchMovies = () => {
    return dispatch => {
        dispatch({ type: FETCH_MOVIES_START })

        try {
            // &${queryString.stringify({ with_genres: parameters }, { arrayFormat: "comma" })}
            axios
            .get(`${BASE_URL}${MOVIES}${API_KEY}${FILTERS}`)
            .then((res) => dispatch(fetchMoviesSuccess(res.data.results)))
        }
        catch(e) {
            dispatch(fetchMoviesError(e))
        }
    }
}

export const FETCH_GENRES_START = 'FETCH_GENRES_START'
export const FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS'
export const FETCH_GENRES_ERROR = 'FETCH_GENRES_ERROR'

export const fethchGenresSuccess = payload => ({
    type: FETCH_GENRES_SUCCESS,

    payload
})

export const fethchGenresError = payload => ({
    type: FETCH_GENRES_ERROR,

    payload
})

export const fetchGenres = () => {
    return dispatch => {
        dispatch({type: FETCH_GENRES_START})

        try {
            axios
            .get(`${BASE_URL}${GENRES}${API_KEY}&language=ru`)
            .then(res => dispatch(fethchGenresSuccess(res.data.genres)))
        }
        catch(e) {
            dispatch(fethchGenresError(e))
        }
    }
}


export const FILTER_MOVIES = 'FILTER_MOVIES'


export const filterMovies = payload => {
    return {
        type: FILTER_MOVIES,
        payload
    }
}

export const GENRE_IS_FALSE = 'GENRE_IS_FALSE'

export const genreIsFalse = payload => {
    return {
        type: GENRE_IS_FALSE,
        payload
    }
}


export const filterMoviesWithGenres = payload => {
    return (dispatch) => {
        dispatch({type: FETCH_MOVIES_START})

        try {
            axios
            .get(`${BASE_URL}${MOVIES}${API_KEY}${FILTERS}&${queryString.stringify({with_genres: payload}, {arrayFormat: 'comma'})}`)
            .then((res) => dispatch(fetchMoviesSuccess(res.data.results)))
            
        }
        catch(e) {
            dispatch(fetchMoviesError(e))
        }
    }
}