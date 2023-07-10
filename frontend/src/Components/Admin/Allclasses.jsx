import React, { useEffect }  from 'react'
import { Button, VStack } from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'

const Allclasses = () => {
    const navigate = useNavigate();
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12];


const valid = sessionStorage.getItem("value");


useEffect(()=>{
  if(sessionStorage.getItem('value')==="true"){
    
  }
  else{
    navigate('/login')
  }
})
  return (
    <>
    <VStack className='classes'>
        {
           arr.map((val , i)=>{
            return(
                <Button key={i} 
                onClick={()=>{navigate(`/class/${val}`)}}
                > { `class ${val}` }</Button>
                )
           })
        }
    </VStack>
    </>
  )
}

export default Allclasses