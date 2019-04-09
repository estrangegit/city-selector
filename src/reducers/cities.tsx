import { MCity } from 'model/MCity';

export const citiesReducer = (state = {searchedCityName: '',
                                        redirectDetails: false,
                                        city: new MCity('', '', [], '', '', 0),
                                        cities: new Array<MCity>(),
                                        fetching: false,
                                        error: null},
                                        action: any) => {
    switch (action.type) {
        case 'SET_CITY': {
            return {
                searchedCityName: state.searchedCityName,
                redirectDetails: state.redirectDetails,
                city: action.city,
                cities: [...state.cities],
                fetching: state.fetching,
                error: state.error
            };            
        }
        case 'SET_SEARCHED_CITY_NAME': {
            return {...state, searchedCityName: action.searchedCityName};            
        }
        case 'SET_REDIRECT_DETAILS': {
            return {...state, redirectDetails: action.redirectDetails};
        }
        case 'SEARCH_CITIES_REQUEST':{
            return {...state, fetching: true, error: null};
        }
        case 'SEARCH_CITIES_SUCCESS': {
            return {...state, fetching: false, cities: action.cities};
        }
        case 'SEARCH_CITIES_FAILURE': {
            return {...state, fetching: false, error: action.error};
        }
        default:
            return state
    }
};