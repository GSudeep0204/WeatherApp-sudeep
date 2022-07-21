import { Container , Image } from "@chakra-ui/react";


function Loading (){
    return (
       <Container w="100%" h="auto" mt={["200px","100px"]}>
           <Image src="./images/Loading.gif"/>
       </Container>
    )
}

export default Loading;