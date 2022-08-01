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

  let weather = await axios(
    {url:`https://api.openweathermap.org/data/2.5/weather?q=${e}&=&appid=fe3c983df64d3e2dd4227bf73441ae78&units=metric`}
     )

   let weatherData = weather.data
   
   let {lon , lat } = weatherData.coord;
   
   let forecast = await axios({url:`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=c8b42cfd68030486fb3a67274b3f24fd`}) 
     
       let forecastData = forecast.data;
     let payload = { weatherData,forecastData};
   
    dispatch(getdatasuccess(payload))
    myToast(toast,"City weather data updated" , "success")
    }

   catch(e){
     
      dispatch(getdataerror());
      myToast(toast,"City weather data doesn't exist","error")
   } 

 } 



export default function GetweatherByLocation(toast,dispatch){
  
  const location = async (position)=>{
    try{
     
    const {latitude,longitude} = position.coords;
   
    dispatch(getdataloading());
  
   
    let weather = await axios(
      {url:`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=fe3c983df64d3e2dd4227bf73441ae78&units=metric`}
       )
  
     let weatherData = weather.data;
     let forecast = await axios({url:`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=c8b42cfd68030486fb3a67274b3f24fd`}) 
     
     
     let forecastData = forecast.data;
       let payload = {weatherData , forecastData}
       dispatch(getdatasuccess(payload))
       myToast(toast,"Your location weather data updated" , "success")
  }
  catch(e){
 
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
    
        let weather = await axios(
        {url:`https://api.openweathermap.org/data/2.5/weather?q=${name}&=&appid=fe3c983df64d3e2dd4227bf73441ae78&units=metric`}
         )
      
       let weatherData = weather.data;
       let {lon , lat } = weatherData.coord;
  
       let forecast = await axios({url:`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=c8b42cfd68030486fb3a67274b3f24fd`}) 
    
       let forecastData = forecast.data;
        let payload = {weatherData , forecastData }
       
        dispatch(getdatasuccess(payload))
        myToast(toast,"City weather data updated" , "success")
        }
    
       catch(e){
          dispatch(getdataerror());
          myToast(toast,"City weather data doesn't exist" , "error")
       }  
}
