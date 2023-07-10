import React from 'react'
import { Avatar, Button, HStack, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Invidual = (Props) => {
  const navigate = useNavigate();
  return (
   <VStack  className='individual' >
   <HStack className='inhstack'>
    <Avatar />
    <VStack className='indetail' >
        <h2>{Props.student.name}</h2>
        <span>{Props.student.rollno}</span>
    </VStack>
   </HStack>
   <Button onClick={ ()=>{ navigate(`/class/${Props.student.standard}/${Props.student._id}`) } }>view</Button> 
   </VStack>
  )
}

export default Invidual