import { Container } from "@chakra-ui/react";

function Map({city}){
   
    return (
       
          
        <Container className="zoom" >
         
             <iframe
              height={"290px"}
              width={"100%"}
              margin="auto"
              loading="lazy"
              allowFullScreen
              src = {`https://www.google.com/maps/embed/v1/place?key=AIzaSyCUn4rKWcNoQGw7AOns0483bG_A7gNgbsY&q=${city}`}
      />   
        </Container>
      
 )
}

export default Map;