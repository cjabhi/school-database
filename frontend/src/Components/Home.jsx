import React from 'react'
import { Button, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardBody, CardFooter  , Image , Stack , Heading , Text , Divider , ButtonGroup} from '@chakra-ui/react'
import {Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import Footer from './Footer'



const Home = () => {
  return (
    <>
    <Button colorScheme='green' >
        <Link to={'/login' }  > Admin </Link>
    </Button>
    <Card w={"full"} h={"400px"} p={"0"} borderRadius={"0"} >
  <CardBody p={"0"} >
    <Image
    w={"100vw"}
    h={"40vh"}
      src='school.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      
    </Stack>
  </CardBody>
  
</Card>
<Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          OUR VISION
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          OUR GOAL
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      We are among the finest institutions providing school level education . 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          OUR STEPS
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      We are among the finest institutions providing school level education . 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          OUR ACHIEVEMENTS
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      We are among the finest institutions providing school level education . 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          ANDSO-ON
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      We are among the finest institutions providing school level education . 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>


<div className="teachers">
<Card maxW='sm' width={'30vw'} minWidth={'330px'} display={'inline-block'}>
  <CardBody display={'inline'} >
    <Image height={'220px'} width={'100%'} objectFit={'cover'} objectPosition={'50% 21% '}
      src='chhote sir.jpeg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Chhote Sir</Heading>
      <Text>
      IT Project Manager,
Information Security Analyst,
Systems Architect,
AI Engineer.
      </Text>
          </Stack>
  </CardBody>
  
</Card>
<Card maxW='sm' width={'30vw'} minWidth={'330px'} display={'inline-block'}>
  <CardBody display={'inline'} >
    <Image height={'220px'} width={'100%'} objectFit={'cover'} objectPosition={'50% 21% '}
      src='manager.jpeg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Manager</Heading>
      <Text>
        Cp specialist ,
      Software Developer,
Web Developer,
UX Designer,
 ...

      </Text>
          </Stack>
  </CardBody>
  
</Card>
<Card maxW='sm' width={'30vw'} minWidth={'330px'} display={'inline-block'}>
  <CardBody display={'inline'} >
    <Image height={'220px'} width={'100%'} objectFit={'cover'} objectPosition={'50% 21% '}
      src='departmental head.jpeg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Director</Heading>
      <Text>
         KNIT Rank opener , computer scientist , cpmaster , physicist , mathemetician , and much more .
      </Text>
          </Stack>
  </CardBody>
  
</Card>
<Card maxW='sm' width={'30vw'} minWidth={'330px'} display={'inline-block'}>
  <CardBody display={'inline'} >
    <Image height={'220px'} width={'100%'} objectFit={'cover'} objectPosition={'50% 27% '}
      src='direc.jpeg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Founder</Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, laudantium?
      </Text>
          </Stack>
  </CardBody>
  
</Card>
<Card maxW='sm' width={'30vw'} minWidth={'330px'} display={'inline-block'}>
  <CardBody display={'inline'} >
    <Image height={'220px'} width={'100%'} objectFit={'cover'} objectPosition={'50% 27% '}
      src='guru.jpeg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Guru</Heading>
      <Text>
        Blockchain specialist , AI/ML master , devOps specialist , cricketer  , Dhoni Fan , ....
      </Text>
          </Stack>
  </CardBody>
  
</Card>
</div>



<Card maxW='sm' display = {'inline'} >
  <CardBody
  display={'flex'}
  flexDir={'column'}
  justifyContent={'center'}
  alignItems={'center'}
  width={'65vw'}
  minWidth={'350px'}
  margin={'auto'}
  >
    <Image
      src='toppers.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Class 12</Heading>
      <Text>
        Our students have performed very nice this year as like every previous year. again we are giving toppers and toppers increasing our prestige .
        </Text>
    </Stack>
  </CardBody>
</Card>
      

    <Footer />

    </>
  )
}

export default Home