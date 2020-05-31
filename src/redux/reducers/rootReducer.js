import {combineReducers} from 'redux'
import moviesReduer from './fetchMovies'


const rootReducer  = combineReducers({
    movies: moviesReduer
})

export default rootReducer


