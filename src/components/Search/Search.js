import React, { Component } from 'react';
import Classes from './Search.scss';
import Select from 'react-select';
import { connect } from 'react-redux';
import * as actions from '../../Store/Actions/index';

class Search extends Component {

    chooseCityHandler = (city) => {
        this.props.getCityWeather(city.value);
    }
    
    render() {
        const options = this.props.cityList.map(city => {
            return {value: city.id, label: city.name}
        })

        return (
            <div>
                <div className={Classes.searchBox}>
                    <Select
                        name="citySearch"
                        onChange={this.chooseCityHandler}
                        options={options}
                    ></Select>
                </div>
            </div>
        );
    }
    
};

const mapStateToProps = state => ({
    cityList: state.weatherReducer.cityList,
    cityWeather: state.weatherReducer.cityWeather,
    selectedCity: state.weatherReducer.selectedCity
});

const mapDispatchToProps = dispatch => ({
   getCityWeather: (cityId) => dispatch(actions.fetchWeatherCity(cityId)),
   selectCity: (city) => dispatch(actions.selectCity(city))
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);