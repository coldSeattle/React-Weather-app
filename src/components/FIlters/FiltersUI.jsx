import React from 'react'

import './Filters.scss'

const FiltersUI = ({ genres, getGenreId}) => {

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
                                
                                // onChange={() => getGenreId(item.id)}
                                // value={[with_genres, movies].includes(item.id)}
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
