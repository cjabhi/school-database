import { VStack, Input, Button, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add_student = () => {
  const [name, setName] = useState("");
  const [standard, setStandard] = useState(null);
  const [rollno, setRollno] = useState(null);
  const [contactno, setContactno] = useState(null);
  const [address, setAddress] = useState("");
  const [mothersname, setMothersname] = useState("");
  const [fathersname, setFathersname] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

const valid = sessionStorage.getItem("value");
  


  const submithandler = async (e) => {
    e.preventDefault();
    const feespaid = 0;
    const studentdata = { name, standard, rollno, fathersname, mothersname, contactno, address , feespaid };
    try {

      const response = await fetch("http://localhost:5000", {
        method: "POST",
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
        // alert("done")
        setStatus("Student added successfully")
        setTimeout(() => {
          setStatus("");
        }, 5000);
        setName("");
        setRollno("");
        setAddress("");
        setContactno("000-000-0000");
        setStandard("");
        setFathersname("");
        setMothersname("");
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
    <>{
      status!=""?
      <Alert >
        <AlertIcon />
        <AlertTitle>{status}</AlertTitle>
        {/* <AlertDescription>Your Chakra experience may be degraded.</AlertDescription> */}
      </Alert>
      : ""
    }
      <form onSubmit={submithandler} className='studentform' >
        <VStack rowGap={"3"} width={"50vw"} margin={"auto"} alignItems={"flex-start"} minWidth={"340px"}>
          <label htmlFor="name">Name</label>
          <Input placeholder='name'
            name='name'
            id='name'
            required
            onChange={(e) => { setName(e.target.value) }}
            value={name}
          />
          <label htmlFor="class">Class</label>
          <Input placeholder='class'
            name='class'
            id='class'
            required
            onChange={(e) => { setStandard(e.target.value) }}
            value={standard}
          />
          <label htmlFor="rollno">Roll no</label>
          <Input placeholder='roll no'
            name='rollno'
            id='rollno'
            required
            onChange={(e) => { setRollno(e.target.value) }}
            value={rollno}
          />
          <label htmlFor='fathersname'>Father's Name</label>
          <Input
            name='fathersname'
            id='fathersname'
            required
            value={fathersname}
            onChange={(e) => { setFathersname(e.target.value) }}
            placeholder="Father's name" />
          <label htmlFor='mothersname'>Mother's Name</label>
          <Input
            name='mothersname'
            id='mothersname'
            required
            value={mothersname}
            onChange={(e) => { setMothersname(e.target.value) }}
            placeholder="Mother's name" />
          <label htmlFor="mobno">Contact number</label>
          <InputGroup>
            <InputLeftAddon children='+91' />
            <Input type='number' placeholder='mob no'
              name='mobno'
              id='mobno'
              isRequired={true}
              onChange={(e) => { setContactno(e.target.value) }}
              value={contactno}
            />
          </InputGroup>
          <label htmlFor="address">Address</label>
          <Input placeholder='address'
            name='address'
            id='address'
            required
            onChange={(e) => { setAddress(e.target.value) }}
            value={address}
          />
          <Button colorScheme='green' type='submit' >Add</Button>
        </VStack>
      </form>
    </>
  )
}

export default Add_student