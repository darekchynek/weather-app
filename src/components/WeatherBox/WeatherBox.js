import React from 'react';
import Classes from './WeatherBox.scss';
import WeatherItem from '../WeatherItem/WeatherItem';

const WeatherBox = props => {
    return props.data.map(item => {
        return (
            <WeatherItem key={item.id}
                cityId={item.id}
                name={item.name}
                temperature={item.temperature}
                rainAmount={item.rainAmount}
                cloudPercentage={item.cloudPercentage}
                delete={props.delete}
                refresh={props.refresh}
            ></WeatherItem>
        )
    });
};

export default WeatherBox;