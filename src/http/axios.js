import axios from 'axios';
import { WEATHER_URL} from './url';

export const cityListInstance = axios.create({
    headers: { 
        'Authorization': 'Bearer ba721f9895d5cebe18697546d08580b3bd7faee8'
    },
    crossDomain: false,
    withCredentials: false,
    baseURL: WEATHER_URL
});