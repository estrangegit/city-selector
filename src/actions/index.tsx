import { MCity } from "./../model/MCity";

 export const setCity = (city: MCity) => ({
     type: 'SET_CITY',
     city: city
 });
 
 export const searchCitiesRequest = (city: MCity) => ({
     type: 'SEARCH_CITIES_REQUEST',
     city: city 
 });

 export const searchCitiesSuccess = (cities: MCity[]) => ({
     type: 'SEARCH_CITIES_SUCCESS',
     cities: cities
 });

 export const searchCitiesFailure = (error: MCity) => ({
     type: 'SEARCH_CITIES_FAILURE',
     error: error
 });

