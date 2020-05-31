import {combineReducers} from 'redux'
import moviesReduer from './fetchMovies'
import genresReducer from './fetchGenres'

const rootReducer  = combineReducers({
    movies: moviesReduer,
    genres: genresReducer
})

export default rootReducer


