
import { dateFormat } from "../Extras/Extras";
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Button,useDisclosure,
Box,Text,Icon,Grid} from '@chakra-ui/react'
import { ImSun } from "react-icons/im";
import { MdOutlineNightsStay } from "react-icons/md";
import { Sudeep } from "../Extras/Extras";


export const Forecastmodal = ({data})=> {
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {day,date} = dateFormat(data.dt)
 
  return (
    <>
     <Box className="Zoom" onClick={onOpen} cursor="pointer" mt={"10px"} textAlign="center" borderRadius={"30px"}  boxShadow='0px 0px 30px 6px #E2E2E2'>
     <Box p={'5px'} bg={'#5e82f4'} borderRadius={"30px 30px 0px 0px"} >
            <Text fontWeight={500} color={'white'} fontSize={'18px'}>{date}</Text>
            <Text fontWeight={500} color={'white'} fontSize={'18px'}>{day}</Text>
      </Box>
       <Text color={'#5e82f4'} fontWeight='500' fontSize={"25px"}>
         <Icon  as={ImSun}/> {Math.round(data.temp.day)} <sup>o</sup>C
       </Text>
       <Text color={'#5e82f4'} fontWeight='500' fontSize={"25px"}>
         <Icon  as={MdOutlineNightsStay }/> {Math.round(data.temp.night)} <sup>o</sup>C
       </Text>
       <Text color={'#5e82f4'} fontWeight='500' fontSize={"25px"}>
       {data.weather[0].main}
       </Text>
       
     </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
          <Box p={'10px'}>
                            <Box p={'5px'} bg={'#5e82f4'} textAlign={'center'} borderRadius={'30px'} mb={'20px'} >
                                <Text fontWeight={500} color={'white'} fontSize={'18px'}>{date}</Text>
                                <Text fontWeight={500} color={'white'} fontSize={'18px'}>{day}</Text>
                            </Box>

                            <Grid templateColumns={'50% 50%'} >
                                <Box pb={'10px'} pl={'15%'}>
                                    {['Felt Temp', 'Humidity', 'Wind', 'Pressure', 'Day Temp', 'Evening Temp', 'Night Temp', 'Max Temp', 'Min Temp'].map((e, i) => (
                                        <Text key={i} color={'#5e82f4'} fontWeight={500} mt={'15px'} fontSize={'18px'} >{e}</Text>
                                    ))}
                                </Box>
                                <Box borderRadius={'30px'} bg={'#5e82f4'}  pb={'10px'} pl={'15%'} color="white" fontSize={"20px"} >
                                    <Sudeep>{data.feels_like.day}<sup>o</sup> C</Sudeep>
                                    <Sudeep>{data.humidity}%</Sudeep>
                                    <Sudeep>{(data.wind_speed * 3.6).toFixed(2)} Km/h</Sudeep>
                                    <Sudeep>{data.pressure} hPa</Sudeep>
                                    <Sudeep>{data.temp.day}<sup>o</sup> C</Sudeep>
                                    <Sudeep>{data.temp.eve}<sup>o</sup> C</Sudeep>
                                    <Sudeep>{data.temp.night}<sup>o</sup> C</Sudeep>
                                    <Sudeep>{data.temp.min}<sup>o</sup> C</Sudeep>
                                    <Sudeep>{data.temp.max}<sup>o</sup> C</Sudeep>
                                </Box>
                            </Grid>
                        </Box>
          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  )
}