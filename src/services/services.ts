import axios from 'axios';

export async function searchWeather(city: string) {
  let API_KEY =  '6148faff9108a7d1f74a9a332767fbfd';
  let URL = `http://api.openweathermap.org/data/2.5/weather?q=${city.replace(' ', '%20')}&appid=${API_KEY}&units=metric`
  return axios.get(URL)
}
