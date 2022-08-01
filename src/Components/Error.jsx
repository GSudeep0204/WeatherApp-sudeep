import { Container , Image } from "@chakra-ui/react";



function Error(){
    return(
        <Container marginTop={["70%","30%","15%"]} width={["300px","500px","800px"]}
        marginLeft={["20%","30%","40%"]} height={["200px","300px","400px"]} >
            <Image width="50%"height ="60%" src="./images/Error.gif" />
        </Container>
    )
}

export default Error;