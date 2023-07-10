import { Img, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { PhoneIcon , EmailIcon } from '@chakra-ui/icons'

const Footer = () => {
  return (
    <VStack className='footer' bg={'black'} color={'white'} paddingBottom={'20px'}>
        <div>CONTACT DEVELOPER</div>
        <div> <PhoneIcon color={'blue.500'} /> : 8077429881</div>
        <div> <EmailIcon color={'purple.300'} /> :  <Link>raunakabhishek234@gmail.com</Link> </div>
        <div className='linkedin' >
        <Link to={'https://www.linkedin.com/in/abhishek-sharma-374b60228/' } target='_blank' >
             <Img src='linkedin.png' display={'inline'} width={'20px'} height={'20px'} pos={'relative'} top={'5px'}  />  Linked In</Link></div>
    </VStack>
  )
}

export default Footer