import React, {Component} from 'react';
import Classes from './WeatherContainer.scss';
import { connect } from 'react-redux';
import * as actions from '../../Store/Actions/index';
import Avx from '../../hoc/Avx';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Footer from '../../components/Footer/Footer';
import WeatherBox from '../../components/WeatherBox/WeatherBox';

class WeatherContainer extends Component {
    componentDidMount() {
        this.props.getCityList();
        //this.props.subscribeCityWeather({"cityId": 763534, "url": `http://localhost:5263/sockets/${763534}`});
        //this.props.unsubscribeCityWeather(763534)
    }

    deleteHandler = (cityId) => {
        this.props.deleteCityWeather(cityId);
    }

    refreshCityHandler = (cityId) => {
        this.props.refreshCityStart(cityId);
    }

    render() {
        let weatherBox = null;
        if (this.props.cityWeather.length > 0) {
            weatherBox = (
                <div className={Classes.weatherBox}>
                    <WeatherBox data={this.props.cityWeather} delete={this.deleteHandler} refresh={this.refreshCityHandler}></WeatherBox>
                </div>
            )
        }
        return (
            <div>
                <div className={"container"}>
                <Header className={Classes.head}></Header>
                    <Search></Search>
                        {weatherBox}
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cityList: state.weatherReducer.cityList,
    cityWeather: state.weatherReducer.cityWeather,
    cityId: state.weatherReducer.cityId
});

const mapDispatchToProps = dispatch => ({
   getCityList: () => dispatch(actions.weatherCityDownload()),
   getCityWeather: (cityId) => dispatch(actions.fetchWeatherCity(cityId)),
   deleteCityWeather: (cityId) => dispatch(actions.deleteCity(cityId)),
   refreshCityStart: (cityId) => dispatch(actions.refreshCityStart(cityId)),
   subscribeCityWeather: (cityData) => dispatch(actions.subscribeWeatherCity(cityData)),
   unsubscribeCityWeather: (cityId) => dispatch(actions.unsubscribeWeatherCity(cityId))
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);