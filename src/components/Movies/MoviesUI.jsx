import React from 'react'

import './Movies.scss'

const MoviesUI = ({ movies }) => {
    return (
        <div className={`movies-ui`}>
            {movies && movies.map(item => (
                <div key={item.title + item.id} className={`card`}>
                    <img className={`card__img`} src={`https://image.tmdb.org/t/p/w185${item.poster_path || item.backdrop_path}`} alt="img" />
                    <div className={`card__body`}>
                        <span className={`card__title`}>Название: {item.title}</span>
                        <span className={`card__release-date`}>Дата выхода: {item.release_date}</span>
                        <span className={`card__release-date`}>Дата выхода: {item.genre_ids.join(',')}</span>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default MoviesUI
