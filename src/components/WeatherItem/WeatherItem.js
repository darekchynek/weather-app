import React from 'react';
import Classes from './WeatherItem.scss';
import BlackRain from '../WeatherComponents/BlackRain/BlackRain';
import LittleRain from '../WeatherComponents/LittleRain/LittleRain';
import Clouds from '../WeatherComponents/Clouds/Clouds';
import Sun from '../WeatherComponents/Sun/Sun';

const WeatherItem = props => {
    let cloud = null; 
    if (props.cloudPercentage >= 50 && props.rainAmount >= 2 ) {
        cloud = (
            <BlackRain></BlackRain>
        )
    } else if (props.cloudPercentage === 0 && props.rainAmount === 0 ) {
        cloud = (
            <Sun></Sun>
        )
    } else if (props.cloudPercentage >= 0 && props.rainAmount === 0 ) {
        cloud = (
            <Clouds></Clouds>
        )
    } else if ( props.cloudPercentage >= 50 && props.rainAmount > 0 ) {
        cloud = (
            <LittleRain></LittleRain>
        )
    }

    return (
        <div className={Classes.weatherItemBox}>
            <div className={Classes.weatherLogo}>
            <div className={Classes.refresh} onClick={() => props.refresh(props.cityId)}>
                <i className={"fas fa-sync-alt"} />
            </div>
            <div className={Classes.delete} onClick={() => props.delete(props.cityId)}>
                <i className={"fas fa-minus-circle"} />
            </div>
            {cloud}
            <div className={Classes.tempBox}>
                <h2>{props.temperature}ºC</h2>
            </div>
            </div>
            <div className={Classes.weatherinfo}>
                <h2>{props.name}</h2>
                <p>Rain Amount: {props.rainAmount}</p>
                <p>Cloud Percentage: {props.cloudPercentage}</p>
            </div>
        </div>
    );
};

export default WeatherItem;