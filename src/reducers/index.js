import { combineReducers } from 'redux';
import FetchWeatherReducer from './reducer_weather'

const rootReducer = combineReducers({
  state: (state = {}) => state,
  weather: FetchWeatherReducer
});

export default rootReducer;
