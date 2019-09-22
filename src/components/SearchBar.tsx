import React, { useState } from 'react';
import { searchWeather } from '../services/services';
import ShowWeather from './ShowWeather';

const SearchBar: React.FC = ( ) => {
  const [searchText, setSearchText] = useState<string>("");
  const [weather, setWeather] = useState<{name: string, visibility: string, windSpeed: string, weather: string, min: string, max: string, temp: string, humidity: string}>({name: "", visibility: "", windSpeed: "", weather: "", min: "", max: "", temp: "", humidity: ""})

  const handleClick = async () => {
    let res = await searchWeather(searchText);
    let {visibility, main, wind, name, weather} = res.data
    let {temp_min, temp_max, humidity, temp} = main
    setWeather({'visibility': visibility, 'windSpeed': wind.speed, 'name': name, 'weather': weather[0].main, 'min': temp_min, 'max': temp_max, 'temp': temp, 'humidity': humidity})
  }

  return (
    <div className="container">
      <h1 className="text-light pt-3">  
        This is another weather app!
      </h1>
      <br/>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter the name of the city" aria-label="Enter the name of the city" aria-describedby="button-addon2" onChange={(e) => setSearchText(e.target.value) }/>
        <div className="input-group-append">
        <button className="btn btn-primary" type="button" id="button-addon2" onClick={() => handleClick()}>Click me</button>
        </div>
      </div>
      <p className="bg-primary text-light">This is the search {searchText}</p>
      <ShowWeather weather={weather}/>
      
    </div>
  )
}

export default SearchBar
