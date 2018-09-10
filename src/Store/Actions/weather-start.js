import * as actionTypes from './actionTypes';
import axios from 'axios';
import { SUB_WEATHER_URL, UNSUB_WEATHER_URL} from '../../http/url';

export const weatherCityDownload = () => ({type: actionTypes.WEATHER_CITY_DOWNLOAD});
export const weatherCityDownloadStart = () => ({type: actionTypes.WEATHER_CITY_DOWNLOAD_START});
export const weatherCityDownloadSucceced = (cityList) => ({type: actionTypes.WEATHER_CITY_DOWNLOAD_SUCCECED, cityList});

export const fetchWeatherCity = (cityId) => ({type: actionTypes.FETCH_WEATHER_CITY, cityId});
export const fetchWeatherCityStart = () => ({type: actionTypes.FETCH_WEATHER_CITY_START});
export const fetchWeatherCitySucceced = (cityWeather) => ({type: actionTypes.FETCH_WEATHER_CITY_SUCCECED, cityWeather});

export const subscribeWeatherCity = (cityData) => {    
    axios.post(SUB_WEATHER_URL, cityData, {
        headers: { 
            'Authorization': 'Bearer ba721f9895d5cebe18697546d08580b3bd7faee8',
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    });
    return ({
        type: actionTypes.SUBSCRIBE_WEATHER_CITY
    })
};

export const unsubscribeWeatherCity = (cityId) => {    
    axios.post(UNSUB_WEATHER_URL + cityId, null,{
        headers: { 
            'Authorization': 'Bearer ba721f9895d5cebe18697546d08580b3bd7faee8',
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'  
        } 
    }); 
    return ({
        type: actionTypes.UNSUBSCRIBE_WEATHER_CITY
    })
};

export const selectCity = (city) => ({type: actionTypes.SELECT_CITY, city});

export const deleteCity = (cityId) => ({type: actionTypes.DELETE_CITY, cityId});

export const refreshCityStart = (cityId) => ({type: actionTypes.REFRESH_CITY_START, cityId});