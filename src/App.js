import React, { useState } from 'react';
// const process = require('process');
import './App.scss'
import { CallAPI, KEY } from './utils/api'
import WeatherUI from './Weather/WeatherUI';


const App = () => {
    const [cityName, setCityName] = useState('')
    const [Weather, setWeather] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    // headers: {'Access-Control-Allow-Origin': 'http://localhost:3000'},
    const getWeatherHandler = async e => {
        try {
            setLoading(true)

            await CallAPI.get('weather/point', {
                headers: {
                    'Authorization': 'example-api-key'
                  },
                // auth: ACCESS_KEY,
                // proxy: {
                //     host: 'localhost',
                //     port: 3000
                //   },
                params: {
                    key: KEY,
                    lang: 'ru',
                    city: cityName,
                    
                }})
                .then(res => {
                        setWeather([res.data])
                        console.log(res.data);
                        
                    })

            setCityName('')
        } catch (error) {
            setError(true)
        }
        setLoading(false)


    }

    console.log(Weather);
    

    return (
        <div className='app'>
            <div className="app_wheather">
                <h1 className={`app__title`}>Weather</h1>
                <form className="app__form form__group field" onSubmit={e => e.preventDefault()}>
                    <input
                        onChange={e => setCityName(e.target.value)}
                        value={cityName}

                        type="search"
                        className={`app__form-input  form__field`}
                        placeholder="Name"
                        name="city"
                        id='name'
                        required />
                    <label
                        htmlFor="name"
                        className={`form__label`}>
                        Enter City
                        </label>
                    <button
                        className={`app__form-button`}
                        onClick={e => { getWeatherHandler(e) }}
                        type="button">
                        показать погоду
                            </button>
                </form>
                {loading &&
                    <div style={{ color: `lightgreen`, padding: "20px" }}>
                        fetching "<strong>{cityName}</strong>"
                    </div>}
                {Weather &&
                    <WeatherUI
                        error={error}
                        Weather={Weather} />
                }

            </div>
        </div>
    )
}


export default App