import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    cityId: null,
    cityList: [],
    cityWeather: [],
    error: null, 
    loading: false,
    selectedCity: null
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.WEATHER_CITY_DOWNLOAD_START: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case actionTypes.WEATHER_CITY_DOWNLOAD_FAILED: {
            return {
                ...state,
                error: action.errorMessage,
                loading: false
            }
        }
        case actionTypes.WEATHER_CITY_DOWNLOAD_SUCCECED: {
            return {
                ...state,
                error: false,
                cityList: action.cityList,
                loading: false
            }
        }
        case actionTypes.FETCH_WEATHER_CITY: {
            return {
                ...state,
                cityId: action.cityId,
                cityWeather: [...state.cityList.filter(
                        city => city.id === action.cityId
                    ), ...state.cityWeather],
                cityList: state.cityList.filter(
                    city => city.id !== action.cityId 
                )
            }
        }
        case actionTypes.FETCH_WEATHER_CITY_START: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case actionTypes.FETCH_WEATHER_CITY_SUCCECED: {
            return {
                ...state,
                cityWeather: state.cityWeather.map(
                    city => city.id === state.cityId ? {...city, ...action.cityWeather} : city
                ),
                loading: false
            }
        }
        case actionTypes.SUBSCRIBE_WEATHER_CITY: {
            return {
                ...state
            }
        }
        case actionTypes.UNSUBSCRIBE_WEATHER_CITY: {
            return {
                ...state
            }
        }
        case actionTypes.DELETE_CITY: {
            return {
                ...state,
                cityWeather: state.cityWeather.filter(
                    city => city.id !== action.cityId 
                ),
                cityList: [...state.cityWeather.filter(
                    city => city.id === action.cityId
                ), ...state.cityList]
            }
        }
        case actionTypes.REFRESH_CITY_START: {
            return {
                ...state,
                cityId: action.cityId
            }
        }
        default: {
            return state;
        }
    }
};

export default weatherReducer;
