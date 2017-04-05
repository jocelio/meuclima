import axios from 'axios';

const API_KEI = 'b720b1cd6cff5d808dcab680a6326473';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEI}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

  const url = `${ROOT_URL}&q=${city},BR`;
  const request = axios.get(url);

  return {
    type:FETCH_WEATHER,
    payload: request
  };
}
