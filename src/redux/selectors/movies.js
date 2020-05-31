import {createSelector} from 'reselect'



export const movieState = state => state.movies.movies

export const movieSelector = createSelector(
    movieState,
    (movies) => {
        return movies
    }
)