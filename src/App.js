import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import { API_KEY, BASE_URL, MOVIES, FILTERS } from './utils/api'
import Header from './containers/Header/Header';

const App = () => {
  return (
    <Header />
  )

}


export default App;


// const parameters =  [16, 18]

// axios.get(`${BASE_URL}${MOVIES}${API_KEY}${FILTERS}
// `, {
//   params: {
//     with_genres: parameters.join(',')
//   }
// }
// )