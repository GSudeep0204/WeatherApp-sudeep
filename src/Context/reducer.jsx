


export const reducer = (state,{type,payload})=>{

    switch(type){
        case "GET_DATA_LOADING" : {
         return{
             ...state,
             isLoading:true,
             isError : false
         }
        };

        case "GET_DATA_SUCCESS" : {
            return {
                ...state,
                isLoading:false,
                isError:false,
                weatherData:payload.weatherData,
                forecastData:payload.forecastData
            }
        };

        case "GET_DATA_ERROR" :{
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        }

    }
};

