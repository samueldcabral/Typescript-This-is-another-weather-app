import React from 'react'

type Props = {
  weather: {
    name: string,
    visibility: string,
    windSpeed: string, 
    weather: string,
    min: string,
    max: string,
    temp: string,
    humidity: string,
    icon_id: string
  }
}

const ShowWeather: React.FC<Props> = ({weather}: Props) => {
  return (
      <div >
        {weather.name && (
          <div className="card">
          <img src={require('../resources/' + parseInt(weather.icon_id) + ".svg")} className="card-img-top image-table text-center" alt={weather.weather + " icon"} />
          <div className="card-body">
            <h1 className="card-text weather-name">{weather.name}</h1>
            <h5 className="card-text mt-5">Temp now: {Math.round(parseInt(weather.temp))  + "°C"}</h5>
            <h5 className="card-text">Temp min: {Math.round(parseInt(weather.min))  + "°C"}</h5>
            <h5 className="card-text">Temp max: {Math.round(parseInt(weather.max))  + "°C"}</h5>
            <h5 className="card-text">Humidity: {weather.humidity + "%"}</h5>
            <h5 className="card-text">Weather: {weather.weather}</h5>
            <h5 className="card-text">Wind speed: {weather.windSpeed + " Km/h"}</h5>
            <h5 className="card-text">Visibility: {weather.visibility ? weather.visibility + " meters" : "Not available"}</h5>
          </div>
        </div>
        )}
      </div>
  )
}


export default ShowWeather
