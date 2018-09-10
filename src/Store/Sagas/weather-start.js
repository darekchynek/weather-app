import * as actions from '../Actions/index';
import axios from 'axios';
import { put, call, take} from 'redux-saga/effects';
import * as base from '../../http/axios';
import { GET_CITY_WEATHER_URL } from '../../http/url';

export function* weatherSaga(action) {
    yield put(actions.weatherCityDownloadStart());
    try {
        const response = yield base.cityListInstance.get();
        yield put(actions.weatherCityDownloadSucceced(response.data));
    } catch (err) {
        console.log(err);
    }
}

export function* weatherCity(action, state) {
    yield put(actions.fetchWeatherCityStart());
    const cityId = action.cityId;
    try {
        const response = yield axios.get(GET_CITY_WEATHER_URL + cityId, {
            headers: { 
                'Authorization': 'Bearer ba721f9895d5cebe18697546d08580b3bd7faee8'
            },
        });
        yield put(actions.fetchWeatherCitySucceced(response.data));
    } catch (err) {
        console.log(err);
    }
}

export function* refreshCity(action) {
    const cityId = action.cityId;
    try {
        const response = yield axios.get(GET_CITY_WEATHER_URL + cityId, {
            headers: { 
                'Authorization': 'Bearer ba721f9895d5cebe18697546d08580b3bd7faee8'
            },
        });
        yield put(actions.fetchWeatherCitySucceced(response.data));
    } catch(err) {
        console.log(err)
    }
}