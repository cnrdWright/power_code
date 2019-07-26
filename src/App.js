import React from 'react';
import './App.css';
import WeatherDisplay from './components/WeatherDisplay'

require('dotenv').config()

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <WeatherDisplay />
    </div>
  );
}

export default App;
