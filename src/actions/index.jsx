 export const setCity = (city) => ({
     type: 'SET_CITY',
     city: city
 });
 
 export const searchCitiesRequest = (city) => ({
     type: 'SEARCH_CITIES_REQUEST',
     city: city 
 });

 export const searchCitiesSuccess = (cities) => ({
     type: 'SEARCH_CITIES_SUCCESS',
     cities: cities
 });

 export const searchCitiesFailure = (error) => ({
     type: 'SEARCH_CITIES_FAILURE',
     error: error
 });

