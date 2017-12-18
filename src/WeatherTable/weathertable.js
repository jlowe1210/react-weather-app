import React from 'react';


function formatTable(data){
    
  
    return data.map(name =>{
          return (
              <tr key={Math.random()}>
                  <td>{name.dt_txt}</td>
                  <td>{name.weather[0].description}</td>
                  <td>{(((  name.main.temp_max - 273.15) * 9/5) + 32).toFixed(2)}°F / {(((  name.main.temp_min - 273.15) * 9/5) + 32).toFixed(2)}°F</td>
                  <td>{name.wind.speed}</td>
                  <td>{name.main.humidity}</td>
              </tr>
          )
      })
      
  }



const Table = (props) =>{
    
    return (
        <div>
        <div className="table-responsive">          
        <table className="table table-striped">
        <thead>
          <tr>
            <th>DAY</th>
            <th>DESCRIPTION</th>
            <th>HIGH/LOW</th>
            <th>WIND SPEED</th>
            <th>HUMIDITY</th>
          </tr>
        </thead>
        <tbody>
          {formatTable(props.fiveDayforcast)}
        </tbody>
      </table>
    </div>

        </div>
      
    )
}

export default Table;