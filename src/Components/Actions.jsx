import axios from "axios"
import { myToast } from "../Extras/Extras";
import { GET_DATA_ERROR , GET_DATA_SUCCESS, GET_DATA_LOADING } from "./Actiontypes";



const getdataloading = ()=>{
  return {type:GET_DATA_LOADING};
}

const getdatasuccess = (payload)=>{
  return {type:GET_DATA_SUCCESS,payload}
}

const getdataerror = ()=>{
  return {type:GET_DATA_ERROR}
}

export async function GetweatherByCity(e,dispatch,toast){
 
try{
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
  params: {
    q: `${e}`,
     cnt: '8',
    units: 'metric'
  },
  headers: {
    'X-RapidAPI-Key': '12aa19a7d5mshac01930e68c38e9p122ad4jsnca3f38e9bed8',
    'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
  }
};

 
   let forecast =  await axios.request(options)
  
    
  let weather = await axios(
    {url:`https://api.openweathermap.org/data/2.5/weather?q=${e}&=&appid=fe3c983df64d3e2dd4227bf73441ae78&units=metric`}
     )

   let weatherData = weather.data
   let forecastData = forecast.data
     let payload = { weatherData , forecastData};
   
    dispatch(getdatasuccess(payload))
    myToast(toast,"City weather data updated" , "success")
    }

   catch(e){
      console.log(e);
      dispatch(getdataerror());
      myToast(toast,"City weather data doesn't exist","error")
   } 

   
 } 



export default function GetweatherByLocation(toast,dispatch){
  
  const location = async (position)=>{
    try{
     
    const {latitude,longitude} = position.coords;
   
    dispatch(getdataloading());
    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
      params: {
         lat: `${latitude}`,
         lon: `${longitude}`,
         cnt: '8',
        units: 'metric'
      },
      headers: {
        'X-RapidAPI-Key': '12aa19a7d5mshac01930e68c38e9p122ad4jsnca3f38e9bed8',
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
      }
    };
    let forecast =  await axios.request(options)
    let weather = await axios(
      {url:`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=fe3c983df64d3e2dd4227bf73441ae78&units=metric`}
       )
  
     let weatherData = weather.data
     let forecastData = forecast.data
       let payload = { weatherData , forecastData};
       dispatch(getdatasuccess(payload))
       myToast(toast,"Your location weather data updated" , "success")
  }
  catch(e){ 
    console.log(e);
    dispatch(getdataerror());
    myToast(toast,"Please turn on your loaction" , "error")
  }
}

const Error = (err)=>{
   console.warn(`Error(${err.code}):(${err.message})`)
  
}
navigator.geolocation.getCurrentPosition(location, Error);
}


export async function update(toast,dispatch,name){
  try{
    const axios = require("axios");
    
    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
      params: {
        q: `${name}`,
         cnt: '8',
        units: 'metric'
      },
      headers: {
        'X-RapidAPI-Key': '12aa19a7d5mshac01930e68c38e9p122ad4jsnca3f38e9bed8',
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
      }
    };
    
     
       let forecast =  await axios.request(options)
      
        
      let weather = await axios(
        {url:`https://api.openweathermap.org/data/2.5/weather?q=${name}&=&appid=fe3c983df64d3e2dd4227bf73441ae78&units=metric`}
         )
    
       let weatherData = weather.data
       let forecastData = forecast.data
         let payload = { weatherData , forecastData};
       
        dispatch(getdatasuccess(payload))
        myToast(toast,"City weather data updated" , "success")
        }
    
       catch(e){
          console.log(e);
          dispatch(getdataerror());
          myToast(toast,"City weather data doesn't exist" , "error")
       } 
    
       
}
