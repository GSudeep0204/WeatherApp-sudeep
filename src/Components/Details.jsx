import {useContext, useEffect, useState} from "react";
import { AppContext } from "../Context/AppContext";
import { Forecastmodal } from "./Forecastmodal";
import { Sudeep } from "../Extras/Extras";
import Loading from "./Loading";
import GetweatherByLocation from "./Actions";
import Error from "./Error";
import Map from "./Map";
import { update } from "./Actions";
import { FaSyncAlt } from "react-icons/fa";
import { Box, Flex, Grid, Heading, Icon, Text, useToast } from "@chakra-ui/react";




function Details ({e}){

   
    const [state, dispatch] = useContext(AppContext);
    const [isRotate,setIsRotate] = useState(false)
    const toast = useToast();

    useEffect(() => {
       GetweatherByLocation(toast,dispatch)
    }, []);

    const handleUpdate = () => {
         setIsRotate(true);
         update(toast,dispatch,state.weatherData.name)
       
    }

    return state.isLoading ? (
        <Loading />
    ) : state.isError ? (
        <Error />
    ) : (
        <>
            <Box maxW={'1400px'} m={'20px auto 5px'} p={'20px'} minH={'550px'}>
                <Grid gridTemplateColumns={['100%', 'repeat(2, 1fr)', 'repeat(2, 1fr)', '30% 27.5% 38%',]} gap={'30px'}>
                    <div className="Zoom" h='300px'>
                        <Box color={'#5e82f4'} p={'20px'} textAlign={'center'} boxShadow="0px 0px 30px 6px #E2E2E2"  borderRadius="30px">
                            <Flex justify={'end'}>
                                <Icon
                                     onClick={handleUpdate}
                                     onAnimationEnd={() => { setIsRotate(false) }}
                                    className= {isRotate ? "iconRotate" : undefined}
                                    cursor={'pointer'} w={'23px'} h={'23px'} as={FaSyncAlt}
                                />
                            </Flex>
                            <Heading>{state.weatherData.name}</Heading>
                            <Heading fontSize={['100px', '120px', '120px', '100px', '120px']}>{Math.round(state.weatherData.main.temp)}<sup>o</sup>C</Heading>
                            <Heading>{state.weatherData.weather[0].main}</Heading>
                        </Box>
                    </div>

                    <div className="Zoom" h='300px'>
                        <Grid templateColumns={'50% 50%'} h={'100%'} p={'8px'} boxShadow='0px 0px 30px 6px #E2E2E2'  borderRadius="30px">
                            <Box py={'10px'} pl={'15%'}>
                                {['Felt Temp.', 'Humidity', 'Wind', 'Visibility', 'Max Temp.', 'Min Temp.'].map((e, i) => (
                                    <Text key={i} color={'#5e82f4'} fontWeight={500} mt={'15px'} fontSize={'18px'} >{e}</Text>
                                ))}
                            </Box>
                            <Box borderRadius={'30px'} bg={'#5e82f4'} py={'10px'} pl={'15%'} color="white">
                                <Sudeep>{state.weatherData.main.feels_like}<sup>o</sup> C</Sudeep>
                                <Sudeep>{state.weatherData.main.humidity}%</Sudeep>
                                <Sudeep>{(state.weatherData.wind.speed * 3.6).toFixed(2)} Km/h</Sudeep>
                                <Sudeep>{(state.weatherData.visibility * 0.001).toFixed(2)} Km</Sudeep>
                                <Sudeep>{state.weatherData.main.temp_max}<sup>o</sup> C</Sudeep>
                                <Sudeep>{state.weatherData.main.temp_min}<sup>o</sup> C</Sudeep>
                            </Box>
                        </Grid>
                    </div>

                    <div className="Zoom"  h='300px' style={{overflow:"hidden"}}>
                        <Map boxShadow='0px 0px 30px 6px #E2E2E2'  city={state.weatherData.name} />
                    </div>
                </Grid>

                <Grid mt={'40px'} templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)', 'repeat(5, 1fr)', 'repeat(8, 1fr)']} gap={'20px'}>
                    {state.forecastData.daily.map((e, i) => <Forecastmodal key={i} data={e}  boxShadow='0px 0px 30px 6px #E2E2E2'/>)}
                </Grid>

                <div className='tagLine'>
              <h1 id="madeBysudeep">Made with ❤️ by Gudekota Sudeep</h1>
              </div>
            </Box >
        </>
    );
}

export default Details;