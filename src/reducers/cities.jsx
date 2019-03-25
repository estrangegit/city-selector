import axios from 'axios';

const citiesReducer = (state = {city:{name:'', code:'', zipCodes:[], departmentCode:'', regionCode:'', population: ''}, cities:[]}, action) => {    
    switch (action.type) {
        case 'SET_CITY': {
            return {
                city: action.city,
                cities: [...state.cities]
            };            
        }
        case 'SEARCH_CITIES': {

            const url = "https://geo.api.gouv.fr/communes?nom=" + action.city.name + "&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre";

            let tempCities = [];

            axios.get(url).then(res => {
                tempCities = res.data.map(c => ({
                                                name : c.nom,
                                                code : c.code,
                                                zipCodes: c.codesPostaux,
                                                departmentCode: c.vcodeDepartement,
                                                regionCode: c.codeRegion,
                                                population: c.population
                                                }))


                return {
                    city: action.city,
                    cities: tempCities
                };            
            })

            return {
                city: action.city,
                cities: tempCities
            };            
        }
        default:
            return state
    }
};

export {citiesReducer};