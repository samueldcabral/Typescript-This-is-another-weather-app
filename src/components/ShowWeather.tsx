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
    humidity: string
  }
}

interface weatherProps {
  name? : string
}

const ShowWeather: React.FC<Props> = ({weather}: Props) => {
  console.log(weather)
  return (
      <div >
        {weather.name && (
          <table className="table table-light">
            <thead>
              <tr>
                <th>{weather.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Temp </td>
                <td>{weather.temp + "°C"}</td>
              </tr>
              <tr>
                <td>Min tepm</td>
                <td>{weather.min + "°C"}</td>
              </tr>
              <tr>
                <td>Max temp</td>
                <td>{weather.max + "°C"}</td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td>{weather.humidity + "%"}</td>
              </tr>
              <tr>
                <td>Weather</td>
                <td>{weather.weather}</td>
              </tr>
              <tr>
                <td>Wind speed</td>
                <td>{weather.windSpeed + " Km/h"}</td>
              </tr>
              <tr>
                <td>Visibility</td>
                <td>{weather.visibility ? weather.visibility + " meters" : "Not available"}</td>
              </tr>
            </tbody>
          </table>
          // <div classNameName="card">
          // <div classNameName="card-header">
          //   {weather.name}
          // </div>
          // <ul classNameName="list-group list-group-flush">
          //   <li classNameName="list-group-item">Cras justo odio</li>
          //   <li classNameName="list-group-item">Dapibus ac facilisis in</li>
          //   <li className="list-group-item">Vestibulum at eros</li>
          // </ul> </div>
        
        )}
      </div>

  )
}


export default ShowWeather
