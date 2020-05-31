import { createSelector } from 'reselect'

export const genreState = state => state.genres.genres

export const genreSelector = createSelector(
    genreState,
    (genres) => {
        return genres
    }
)


export const withGenreState = state => state.movies.with_genres

export const withGenreSelector = createSelector(
    withGenreState,
    (with_genres) => {
        return with_genres
    }
)