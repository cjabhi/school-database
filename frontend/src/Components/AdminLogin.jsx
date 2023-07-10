import React, { useEffect } from 'react'
import { Avatar, Button, Input, InputGroup, InputLeftElement, InputRightElement, VStack } from '@chakra-ui/react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

const AdminLogin = () => {
    const valid = sessionStorage.getItem("value");
    const [show, setShow] = React.useState(false)
    const handleClick = () => {setShow(!show);
    // console.log(show  , 'clicked')
    }
  
    const navigate = useNavigate();
    const username = 'cjabhi';
    const password = '123456';

    const [iu, setIu] = useState("");
    const [ip, setIp] = useState(null);
    const [isuser , setisuser] = useState(false)

    const handlesubmit = (e) => {
        e.preventDefault();
        if (iu === username && ip === password) {
           sessionStorage.setItem('value' , true)
            navigate('/admin');
        }
        else {
            alert("credentials incorrect");
        }
    }

    useEffect(()=>{
        if(sessionStorage.getItem('value')==="true"){
            navigate('/admin')
        }
      })
    return (
        <div className='adminlogin'>
            <VStack >
                <form onSubmit={handlesubmit}
                style={{
                    width:"35vw",
                    minWidth:"360px"
                }}
                >
                    <label htmlFor='username' >Username</label>
                    <InputGroup mb={'5'} mt={'3'} >
                    <InputLeftElement pointerEvents='none'>
      <Avatar width={'15'} h={'1.75rem'} color='gray.300' />
    </InputLeftElement>

                    <Input
                        name='username'
                        id='username'
                        required
                        value={iu}
                        onChange={(e) => { setIu(e.target.value) }}
                        />
                        </InputGroup>
                    <label htmlFor='password' >Password</label>
                    <InputGroup mb={'5'} mt={'3'} >
                        <Input
                            name='password'
                            id='password'
                            required
                            value={ip}
                            onChange={(e) => { setIp(e.target.value) }}
                            type={show ? 'text' : 'password'}
                        />
<InputRightElement width='4.5rem'>
        <Button h='1.75rem' ml={"20px"} size='sm' onClick={handleClick}>
          {show ? <ViewIcon color={"blue"} /> : <ViewOffIcon color={"blue"} /> }
        </Button>
      </InputRightElement>

                    </InputGroup>
                    <Button type='submit' width={'35vw'} minW={"360px"} colorScheme='green' >login</Button>
                </form>
                <p>
                    use
                   </p>
                   <p> username : cjabhi , password: 123456  to check out admin functionalities</p>
            </VStack>
        </div>
    )
}

export default AdminLogin