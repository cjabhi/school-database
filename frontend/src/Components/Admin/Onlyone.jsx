import React, { useState, useEffect, Component } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { VStack, Input, Textarea, HStack, Button , Box , Spinner } from '@chakra-ui/react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react'

const Onlyone = () => {
  const valid = sessionStorage.getItem("value");
  const navigate = useNavigate()
  const para = useParams();
  console.log(para)
  const [name, setName] = useState("");
  const [standard, setStandard] = useState(0);
  const [rollno, setRollno] = useState(0);
  const [contactno, setContactno] = useState(0);
  const [address, setAddress] = useState("");
  const [fathersname, setFathersname] = useState("");
  const [mothersname, setMothersname] = useState("");
  const [feespaid , setFeespaid] = useState(10);
  const [data, setData] = useState([])
  const [status, setStatus] = useState("");
  const [fetching , setFetching] = useState(false);
  var student = {};
  async function getdata() {
    try {
      // const id = para.id;
      setFetching(true);
      const response = await fetch(`https://school-database.onrender.com/${para.id}`);
      // setData(response.json());
      const result = await response.json();

      student = result;

      setData(result);
      setName(student.name);
      setStandard(student.standard);
      setRollno(student.rollno);
      setAddress(student.address);
      setFathersname(student.fathersname);
      setMothersname(student.mothersname);
      setContactno(student.contactno);
      setFeespaid(student.feespaid)
      setAddress(student.address)
      setFetching(false);
    }catch (error) {
      setFetching(false);
    alert(error)
  }
}
console.log(para.id);



async function deletestudent(){
  try{
    setFetching(true);
      const response = await fetch(`https://school-database.onrender.com/${para.id}` , {
          method:"DELETE"
      })
      const result = response.json();
      setFetching(false);
      alert("deleted")
      setStatus("Student deleted from the database successfully");
        setTimeout(() => {
          setStatus("");
        }, 5000);
  }catch(err){
    setFetching(false);
      alert(err)
      setStatus(err);
        setTimeout(() => {
          setStatus("");
        }, 5000);
      console.log(err);
  }
}







useEffect(() => {
  getdata();
},[]);

console.log(student)


async function update(e) {
  e.preventDefault();
  const studentdata = { name, standard, rollno, fathersname, mothersname, address, contactno };
  try {
    setFetching(true);
      console.log(JSON.stringify(studentdata))
    const response = await fetch(`https://school-database.onrender.com/${para.id}`, {
      method: "PATCH",
      body: JSON.stringify(studentdata),
      headers: {
        "content-type": "application/json",
      }
    });
    const result = await response.json();
    if (!response.ok) {
      setFetching(false);
      console.log(result.error);
      alert(result.error);
      setStatus(result.error);
        setTimeout(() => {
          setStatus("");
        }, 5000);
    }
    
    else if (response.ok) {
      setFetching(false);
      setStatus("Student updated in the database successfully");
      setTimeout(() => {
        setStatus("");
      }, 5000);

    }
  } catch (err) {
    setFetching(false);
    alert(err)
  }
}

const Navigate = useNavigate();
 
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

{
  fetching ? (<Spinner position={'absolute'} top={'45vh'} left={'48vw'} />) : (

  <form onSubmit={update}>

    <VStack width={"50vw"} margin={"auto"} alignItems={"flex-start"} minWidth={"340px"} >
      <label htmlFor='name'>Student-Name</label>
      <Input
        onChange={(e) => { setName(e.target.value) }}
        name='name' id='name'
        value={name}
        />
      <label htmlFor='class'>Standard</label>
      <Input
        onChange={(e) => { setStandard(e.target.value) }}
        name='class' id='class'
        value={standard}
        />
      <label htmlFor='rollno'>Roll-No</label>
      <Input
        onChange={(e) => { setRollno(e.target.value) }}
        name='rollno' id='rollno'
        value={rollno}
        />
      <label htmlFor='father'>Father's Name</label>
      <Input
        onChange={(e) => { setFathersname(e.target.value) }}
        name='father' id='father'
        value={fathersname}
        />
      <label htmlFor='mother'>Mother's Name</label>
      <Input
        onChange={(e) => { setMothersname(e.target.value) }}
        name='mother' id='mother'
        value={mothersname}
        />
      <label htmlFor='contact'>Contact No</label>
      <Input
        onChange={(e) => { setContactno(e.target.value) }}
        name='contact' id='contact'
        value={contactno}
        />
      <label htmlFor='address'>Address</label>
      <Textarea
        onChange={(e) => { setAddress(e.target.value) }}
        name='address' id='address'
        value={address}
        />
      <Box style={{color:"blue"}} >Fee-Paid:{feespaid} Rs</Box>
      <HStack>
        <Button onClick={()=>{Navigate(`/class/${para.i}`)}} colorScheme='yellow' >back</Button>
        <Button type='submit' colorScheme='green' >save</Button>
        <Button onClick={deletestudent} colorScheme='red' >delete</Button>
      </HStack>
    </VStack>
    
  </form>
        )
      }
        </>
)
}

export default Onlyone