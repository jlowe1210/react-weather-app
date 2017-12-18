import React from 'react'
import Table from '../WeatherTable/weathertable'
import './weathercard.css'


const WeatherCard = (props) =>{
    if(!props.weatherdata){
        return null;
    }
    

    return(
        <div>
        <div className="vertical-center-row row">
        <div className="col-sm-6 col-md-4 center-block" >
          <div className="thumbnail">
            <div className="caption">
              <h1 className='idk'>{props.weatherdata.name}</h1>
              <h4>{(((  props.weatherdata.temp - 273.15) * 9/5) + 32).toFixed(2)}°F  /  {(((  props.weatherdata.temp - 273.15).toFixed(2)))}°C </h4>
            </div>
          </div>
        </div>
      </div>
      <Table fiveDayforcast={props.fiveDayforcast}  />
      </div>
    )
}

export default WeatherCard;