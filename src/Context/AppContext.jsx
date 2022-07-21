
import { createContext, useReducer } from "react";
import {reducer} from "./reducer"
export const AppContext = createContext();

export  const AppContextProviderwrapper = ({children})=>{
    const [state,dispatch] = useReducer(reducer,{
        isLoading:true,
        isError:false,
        weatherData:{},
        forecastData:[]
    })
    return <AppContext.Provider value={[state,dispatch]}>{children}</AppContext.Provider>
}
