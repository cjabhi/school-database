import { Button, Input, InputGroup, InputLeftAddon, InputLeftElement, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

const Addpayment = () => {
  const [name , setName] = useState("");
  const [standard , setStandard] = useState("");
  const [rollno , setRollno] = useState("");
  const [feespaid , setFeespaid] = useState("");
  const [status, setStatus] = useState("");

    const navigate = useNavigate();

    async function update(e) {
      e.preventDefault();
  const studentdata = { name, standard, rollno, feespaid };
  try {
      console.log(JSON.stringify(studentdata))
    const response = await fetch(`http://localhost:5000/amount/6789`, {
      method: "PATCH",
      body: JSON.stringify(studentdata),
      headers: {
        "content-type": "application/json",
      }
    });
    const result = await response.json();
    if (!response.ok) {
      console.log(result.error);
      alert(result.error);
      setStatus(result.error);
        setTimeout(() => {
          setStatus("");
        }, 5000);
    }
    else if (response.ok) {

      setName("");
      setRollno("");
      setStandard("");
      setFeespaid("");
      setStatus("Payment added successfully");
        setTimeout(() => {
          setStatus("");
        }, 5000);
    }
  } catch (err) {
    alert(err)
  }
      }

      useEffect(()=>{
        if(sessionStorage.getItem('value')==="true"){
          
        }
        else{
          navigate('/login')
        }
      })
  return (
    <>
        {
      status!=""?
      <Alert >
        <AlertIcon />
        <AlertTitle>{status}</AlertTitle>
        {/* <AlertDescription>Your Chakra experience may be degraded.</AlertDescription> */}
      </Alert>
      : ""
    }

    <div>
      <form onSubmit={update} className='paymentform' >
        <VStack alignItems={'flex-start'} width={"50vw"} minWidth={'350px'} >
          <label htmlFor='name'>Name</label>
          <Input name='name' id='name' placeholder='Student Name'
          onChange={(e)=>setName(e.target.value)}
          value={name}
          />
          <label htmlFor='std'>Class</label>
          <Input name='std' id='std' placeholder='Class'
          onChange={(e)=>setStandard(e.target.value)}
          value={standard}
          />
          <label htmlFor='rollno'>Roll No</label>
          <Input name='rollno' id='rollno' placeholder='Roll Number'
          onChange={(e)=>setRollno(e.target.value)}
          value={rollno}
          />
          <label htmlFor="fees">Amount</label>
          <InputGroup>
            <InputLeftAddon children='$' />
            <Input type='number' placeholder='Enter Amount'
              name='fees'
              id='fees'
              isRequired={true}
              onChange={(e) => { setFeespaid(e.target.value) }}
              value={feespaid}
            />
          </InputGroup>
          <Button type='submit'>Submit</Button>
        </VStack>
      </form>
    </div>
              </>
  )
}

export default Addpayment