import { MCity } from 'model/MCity'

export const setSearchedCityName = (searchedCityName: string) => ({
  searchedCityName,
  type: 'SET_SEARCHED_CITY_NAME',
})

export const setRedirectDetails = (redirectDetails: boolean) => ({
  redirectDetails,
  type: 'SET_REDIRECT_DETAILS'
})

export const setCity = (city: MCity) => ({
  city,
  type: 'SET_CITY',
})

export const searchCitiesRequest = (searchedCityName: string) => ({
  searchedCityName,
  type: 'SEARCH_CITIES_REQUEST',
})

export const searchCitiesSuccess = (cities: MCity[]) => ({
  cities,
  type: 'SEARCH_CITIES_SUCCESS',
})

export const searchCitiesFailure = (error: MCity) => ({
  error,
  type: 'SEARCH_CITIES_FAILURE',
})
