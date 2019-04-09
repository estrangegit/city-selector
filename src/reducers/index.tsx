import { combineReducers } from 'redux';
import { citiesReducer }  from 'reducers/cities';

export const rootReducer = combineReducers({citiesReducer});