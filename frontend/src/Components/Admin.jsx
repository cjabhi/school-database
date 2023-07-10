import React , {useEffect} from 'react'
import { Button, VStack  } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'





const Admin = () => {
  const valid = sessionStorage.getItem('value');
  const navigate = useNavigate();



  useEffect(()=>{
    if(sessionStorage.getItem('value')==="true"){
      
    }
    else{
      navigate('/login')
    }
  })
  return (
    <VStack className='adminfirstpage' marginTop={"20vh"} rowGap={'5'} >
    <Button onClick={() => {navigate('/addstudent')}} >
        Add a new student
    </Button>
    <Button
    onClick={() => {navigate('/classes')}}
    >
        Find a student
    </Button>
    <Button onClick={()=>{navigate('/acceptpayment')}} >
        Add a payment
    </Button>

    <Button colorScheme='orange' onClick={()=>{sessionStorage.setItem('value' , false) ;
    navigate('/')
    }} >Logout</Button>
    </VStack>
  )
}

export default Admin