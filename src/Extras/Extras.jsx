import {Box} from '@chakra-ui/react'


export const myToast = (toast,title,status,description) => toast({
    title,
    description,
    status,
    duration: 5000,
    isClosable: true,
});


export const dateFormat = (dt) => {

    const milliseconds = dt * 1000;

    const arr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let myDate = new Date(milliseconds);
    let date = myDate.toLocaleDateString('en-GB');
    let d = myDate.getDay();
    let day = arr[d];
    return { date, day };
}

export const Sudeep = ({children})=>{
    return (
        <Box mt={"15px"} fontWeight='500' fontSize='18px'>
            {children}
        </Box>
    )
}