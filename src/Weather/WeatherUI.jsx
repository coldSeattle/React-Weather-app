import React from 'react'
import './weather.scss'



const WeatherUI = ({ Weather }) => {
    return (
        <>
        {Weather && Weather[0].location   ?
            <ul className={`wheather`}>
                <li className={`wheather__item`}><p className={`wheather__item-title item__title`}>City:</p> {Weather && Weather[0].location.name}</li>
                <li className={`wheather__item`}><p className={`wheather__item-title item__title`}>local time: </p>{Weather && Weather[0].location.localtime}</li>
                <li className={`wheather__item`}><p className={`wheather__item-title item__title`}>UTC: </p>{Weather && Weather[0].location.utc_offset}</li>
                <li className={`wheather__item`}><p className={`wheather__item-title item__title`}>Temperature: </p>{Weather && Weather[0].current.temperature} C</li>
                <li className={`wheather__item`}><p className={`wheather__item-title item__title`}>Weather: </p>{Weather && (<img src={Weather[0].current.weather_icons[0]} />)}</li>
                <li className={`wheather__item`}><p className={`wheather__item-title item__title`}>Weather description: </p>{Weather && Weather[0].current.weather_descriptions[0]}</li>
                <li className={`wheather__item`}><p className={`wheather__item-title item__title`}>Wind speed: </p>{Weather && Weather[0].current.wind_speed} km/hour</li>
                <li className={`wheather__item`}><p className={`wheather__item-title item__title`}>Wind dir: </p>{Weather && Weather[0].current.wind_dir}</li>
                <li className={`wheather__item`}><p className={`wheather__item-title item__title`}>Humidity: </p>{Weather && Weather[0].current.humidity} %</li>
                <li className={`wheather__item`}><p className={`wheather__item-title item__title`}>Feelslike: </p>{Weather && Weather[0].current.feelslike} C</li>
            </ul>
            :
            <div style={{color: `red`, padding:'20px'}}>some error occurred, while fetching api</div> 

            }
        </>
    )
}

export default WeatherUI