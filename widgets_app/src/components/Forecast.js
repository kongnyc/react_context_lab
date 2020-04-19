import React from 'react'

const Forecast =({data})=> {
        const displayForecast = data.map(day=>{
            // debugger
            return (
            <div className="forecast" key={day.datetime}>
                <h4>{day.timestamp_local}</h4>
                <p>{day.weather.description}</p>
                <p>Temperature: {day.temp}°C</p>
                <p>Feels Like: {day.app_temp}°C</p>

            </div>)
        })

        return (
            <div>
                {displayForecast}
            </div>
        )
    }


export default Forecast
