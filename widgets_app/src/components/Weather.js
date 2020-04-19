import React, { useState, useEffect } from 'react'
import axios from "axios"
import API_Key from "../API_KEY"
import Forecast from "./Forecast"

const Weather =()=> {
    const [weather, setWeather]=useState([])
    const [city,setCity]=useState("")
    let lat;
    let lon;
    const fetchLocation =()=>{
        try {
            navigator.geolocation.getCurrentPosition(async position=>{
                 lat=position.coords.latitude; lon=position.coords.longitude
                 let res = await axios.get(`https://api.weatherbit.io/v2.0/forecast/hourly?lat=${lat}&lon=${lon}&key=${API_Key}&hours=240`)
                //  debugger
                 setWeather(res.data.data)
                 setCity(res.data.city_name)
                })
        } catch (error) {
            console.error(error);
        }
    }
 
    useEffect(()=>{
        fetchLocation();
    //   fetchWeather()
    },[]);

        // console.log(weather)
        return (
            <div>
                <p>Weather page</p>
                <p>City: {city}</p>
                <Forecast data={weather}/>
            </div>
        )
    }


export default Weather
