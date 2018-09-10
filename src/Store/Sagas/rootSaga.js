import { weatherSaga, weatherCity, refreshCity } from './weather-start';
import * as actionTypes from '../Actions/actionTypes';
import { takeEvery } from 'redux-saga/effects';

export function* watchAuth() {
    yield takeEvery(actionTypes.WEATHER_CITY_DOWNLOAD, weatherSaga);
    yield takeEvery(actionTypes.FETCH_WEATHER_CITY, weatherCity);
    yield takeEvery(actionTypes.REFRESH_CITY_START, refreshCity);
}