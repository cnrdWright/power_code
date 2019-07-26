import React from 'react'

export default class WeatherDisplay extends React.Component {

  async componentDidMount() {
    const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=Denver&APPID=${process.env.OPEN_WEATHER_API_KEY}`)
    console.log(response)
    const data = await JSON.stringify(response)
    console.log(data)
  }

  render() {
    return(
      <div>
        <h1>This is the weather component</h1>
      </div>
    )
  }
}
