import { takeLatest, call, put } from "redux-saga/effects";
import axios from 'axios';
import { MCity } from "model/MCity";

export function* watcherSaga() {
    yield takeLatest("SEARCH_CITIES_REQUEST", workerSaga);
}

function fetchCities(cityName:any) {
    return axios({
        method: "get",
        url: "https://geo.api.gouv.fr/communes?nom=" + cityName + "&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre"
    });
}

function* workerSaga(action:any) {
    try {
        const res = yield call(fetchCities, action.city.name);
        const cities: Array<MCity> = 
        res.data.map((c: { nom: string; code: string; codesPostaux: string[]; vcodeDepartement: string; codeRegion: string; population: number; }) => ({
            name : c.nom,
            code : c.code,
            zipCodes: c.codesPostaux,
            departmentCode: c.vcodeDepartement,
            regionCode: c.codeRegion,
            population: c.population
        }));

        yield put({ type: "SEARCH_CITIES_SUCCESS", cities });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: "SEARCH_CITIES_FAILURE", error });
    }
}