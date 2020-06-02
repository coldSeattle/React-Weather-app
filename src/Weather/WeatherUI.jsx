import React from 'react'
import './weather.scss'


const WeatherUI = ({ Weather }) => {
    return (
        <>
        {Weather && Weather[0].data   ?
            <ul className={`wheather`}>
                <li className={`wheather__item`}><p className={`wheather__item-title item__title`}>City:</p> {Weather && Weather[0].data[0].city_name}</li>
                <li className={`wheather__item`}><p className={`wheather__item-title item__title`}>Temperature: </p>{Weather && Weather[0].data[0].temp} C</li>
                <li className={`wheather__item`}><p className={`wheather__item-title item__title`}>Weather description: </p>{Weather && Weather[0].data[0].weather.description}</li>
                <li className={`wheather__item`}><p className={`wheather__item-title item__title`}>Wind speed: </p>{Weather && Weather[0].data[0].wind_spd} m/s</li>
                <li className={`wheather__item`}><p className={`wheather__item-title item__title`}>Wind dir: </p>{Weather && Weather[0].data[0].wind_dir} degrees</li>
                <li className={`wheather__item`}><p className={`wheather__item-title item__title`}>Humidity: </p>{Weather && Weather[0].data[0].rh} %</li>
                <li className={`wheather__item`}><p className={`wheather__item-title item__title`}>Feelslike: </p>{Weather && Weather[0].data[0].app_temp} C</li>
            </ul>
            :
            <div style={{color: `red`, padding:'20px'}}>some error occurred, while fetching api</div> 

            }
        </>
    )
}

export default WeatherUI