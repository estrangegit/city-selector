const citiesReducer = (state = {city:{name:'', code:'', zipCodes:[], departmentCode:'', regionCode:'', population: ''}, cities:[], fetching: false, error: null}, action = {type: ''}) => {
    switch (action.type) {
        case 'SET_CITY': {
            return {
                city: action.city,
                cities: [...state.cities],
                fetching: state.fetching,
                error: state.error
            };            
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

export {citiesReducer};