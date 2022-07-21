import {Flex,Center,Input,Button,Icon} from '@chakra-ui/react';
import {useState ,useContext , useEffect} from "react"
import {AppContext} from '../Context/AppContext';
import {HiLocationMarker} from "react-icons/hi";
import { GetweatherByCity } from './Actions';
import GetweatherByLoaction from "./Actions";
import { useToast } from '@chakra-ui/react'

function Navbar(){

  const [state,dispatch] = useContext(AppContext);
 const [city,setCity] = useState("");
 const toast = useToast();
 
const handlechange = ()=>{
    
  if(city)  GetweatherByCity(city,dispatch,toast);

    setCity("");
   
};

useEffect(()=>{
 
},[state]);

 const handleLocationData =  ()=>{
  navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position.coords);
  });
    GetweatherByLoaction(toast,dispatch);
}

return (

  <div id="nav">
    <Flex p="10px" justifyContent={"center"} minH={"70px"} flexDirection={["column","row"]} gap={["10px","0px"]}>
  <Center px="10px">
  <Input 
  onKeyPress={({key})=> key === "enter" ? handlechange : undefined}
  onChange = {(e)=>setCity(e.target.value)}
  borderRadius={"15px 0px 0px 15px"}
  width="200px"
  value={city}
  backgroundColor={"white"}
  border={"2px grey solid"}
  placeholder='City'/>
  <Button colorScheme='blue'
  bg={'#5e82f4'}
  _hover={{ 'bg': '5e82f4' }}
   onClick={handlechange}
   borderRadius = {"0px 15px 15px 0px"}
   color={"white"}
  >Search</Button>
  </Center>
 
   <Center>
   <Button colorScheme='blue'
    bg={"#5e82f4"}
    _hover={{ 'bg': '5e82f4' }}
    color={'white'}
    w={'100%'}
    borderRadius={'15px'}
    leftIcon={<Icon w={'30px'} h={'30px'} as={HiLocationMarker} />}
    onClick={handleLocationData}
   >Your Location Weather</Button>
   </Center>
</Flex>

</div>
    )
}

export default Navbar;