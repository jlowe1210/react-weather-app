import React, { Component } from 'react';
import Map from './Map.js/map'
import axios from 'axios'
import Search from './Search/search'
import WeatherCard from './WeatherCard/weatherCard'
import  'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component {
  state = {
    location: null,
    weatherData: null,
    fiveDayforcast: null,
    
  }

  async getWeather(area){
    const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${area}&APPID=e157b6998b793d0e3f48f35a14533939`)
    const weatherForcast = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${data.id}&appid=e157b6998b793d0e3f48f35a14533939`)
    const weatherData = {
      name: data.name,
      icon: data.weather[0].icon,
      temp: data.main.temp,
      pressure: data.main.pressure,
      humidity: data.main.humidity
    }

    this.setState({
      location: data.coord, 
      weatherData,
      fiveDayforcast: weatherForcast.data.list
    })


  }

  async getWeatherByCoords ({lat, lon}){
    const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e157b6998b793d0e3f48f35a14533939`)
    const weatherForcast = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${data.id}&appid=e157b6998b793d0e3f48f35a14533939`)
    

    const weatherData = {
      name: data.name,
      icon: data.weather[0].icon,
      temp: data.main.temp,
      pressure: data.main.pressure,
      humidity: data.main.humidity
    }
    this.setState({
      location: data.coord, 
      weatherData,
      fiveDayforcast: weatherForcast.data.list
    })
   
  }
  
  
  render() {
    return (
      <div>
        <Map location={this.state.location} weathercoord = {this.getWeatherByCoords.bind(this)} />
        <div className='container'>
          <Search getWeather={this.getWeather.bind(this)} />
          <WeatherCard weatherdata={this.state.weatherData} fiveDayforcast={this.state.fiveDayforcast} />
      </div>
      </div>

    );
  }
}

export default App;
