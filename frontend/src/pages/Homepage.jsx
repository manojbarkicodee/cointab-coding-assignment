import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchdata,deletedata } from '../redux/action'
import {Button,VStack,Heading} from "@chakra-ui/react"
import { useToast } from '@chakra-ui/react'
const Homepage = () => {
    let dispatch=useDispatch()
    let navigate=useNavigate()
    let {loading,delete_error,success,user_error}=useSelector(state=>state)
    console.log(loading)
    const toast = useToast()

    let savetodatabase=async()=>{
        await dispatch(fetchdata(url))
        if(loading){
            alert("Alert:fetching data in progress")
        }
        if(success){
            toast({
                position:"top",
                title: 'Data fetched.',
                description: "We've fetched data from api.",
               
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
        }
    }

    let deleteall=()=>{
        alert("Alert :Will delete all entries")
dispatch(deletedata())


    }

    let getuserdetails=()=>{
navigate("/userdetails")
    }
    let url="https://randomuser.me/api/?results=100"
  return (
    <div>
        <VStack border="1px solid black" bg="black" height="80px" spacing={"20px"}> <Heading mt="15px" color="white">Home Page</Heading></VStack>
        
    <VStack mt="100px" spacing={"50px"}>
       
        <Button onClick={savetodatabase} colorScheme='teal' size='lg' height="70px" width="300px"  >Fetch details</Button>
        <Button colorScheme='teal' size='lg' height="70px" width="300px"  onClick={deleteall}>Delete details</Button>
        <Button colorScheme='teal' size='lg' height="70px" width="300px"  onClick={getuserdetails}>User details</Button>
    </VStack>
    </div>
  )
}

export default Homepage