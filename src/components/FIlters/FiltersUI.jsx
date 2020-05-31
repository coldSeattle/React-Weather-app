import React from 'react'

import './Filters.scss'

const FiltersUI = ({ genres, getGenreHandler, with_genres}) => {

    return (
        <div
            className={`filters`}>
            <div
                className={`filters__wrapper`}>
                <ul
                    className={`filters__list`}>
                    {genres && genres.map(item => (
                        <li
                            key={`${item.id}`}
                            className={`filters__items`}>
                            <input
                                
                                onChange={event => getGenreHandler(item.id, event)}
                                // checked={with_genres.filter(genre => genre !== item.id)}
                                // value={with_genres.includes(item.id)}
                                id={`${item.id}`}
                                type="checkbox" />
                            <label
                                htmlFor={`${item.id}`}>
                                {item.name}</label>
                        </li>

                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FiltersUI
