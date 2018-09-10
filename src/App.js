import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Classes from './App.scss';
import WeatherContainer from './Containers/WeatherContainer/WeatherContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={WeatherContainer}/>
        </div>
      </Router>
    );
  }
}

export default App;