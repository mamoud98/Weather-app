import { createStore, combineReducers } from "redux";
import WeatherReducer from "./reducers/WeatherReducer";

const rootReducer = combineReducers({
  We: WeatherReducer,
});

const store = createStore(rootReducer);

export default store;
