import React, { useEffect, useState } from 'react';
import axios from 'axios'
import queryString from 'query-string'
import './App.css';
import { API_KEY, BASE_URL, MOVIES, FILTERS } from './utils/api'
import Header from './containers/Header/Header';
import Movies from './containers/Movies/Movies';
import Filters from './containers/Filters/Filters';

const App = () => {
  return (
    <>
    <Header />
    <div style={{display: 'flex' }}>
    <Movies />
    <Filters />
    </div>
    </>
    
  )

}


export default App;

// queryString.stringify({with_genres: parameters}, {arrayFormat: "comma"})
// queryString.stringify({with_genres: parameters}, {arrayFormat: "comma"})
// const parameters =  [16, 18]
// // console.log(queryString.stringify({with_genres: parameters}, {arraycFormat: "comma"}));


// axios.get(`${BASE_URL}${MOVIES}${API_KEY}${FILTERS}&${queryString.stringify({with_genres: parameters}, {arrayFormat: "comma"})}
// `

// )