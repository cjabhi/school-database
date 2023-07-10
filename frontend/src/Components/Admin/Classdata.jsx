import { Box, Button, HStack, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Invidual from './Invidual';
import { useNavigate } from 'react-router-dom';

const Classdata = () => {
    const  navigate = useNavigate();
    const valid = sessionStorage.getItem("value");
    const [size , setSize] = useState(0);
    const it = useParams();
    console.log(it)
    const [data , setData] = useState([])
    async function getdata(){
        try{
            const std = it.i;
            
            const response = await fetch(`http://localhost:5000/class/${std}`);
            // setData(response.json());
            const result = await response.json();
            if(!response.ok)
            {
                console.log(result.error);
            }
            if(response.ok){
                
                setData(result);
                setSize(data.length);
                console.log(data);
                console.log(size);
            }
        }catch(error){
            alert(error)
        }
    }
    useEffect(()=>{
        getdata();
    }, []);
    useEffect(()=>{
        if(sessionStorage.getItem('value')==="true"){
          
        }
        else{
          navigate('/login')
        }
      })
  return (
    <>
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }} >
        <Link to={'/addstudent'} >
          <Button margin={'auto'}  >Add a new student</Button>
        </Link>
    </div>

    {   data.length===0 ? <div>There is no student in class {it.i}</div> :

      <HStack flexWrap={"wrap"} justifyContent={"center"} >
    {
      
      data.map((item , index)=>(<div key={index}>
              <Invidual student = {item}  />
              
            </div>
            ))
          
    }
    </HStack>
}
          
    </>
  )
}

export default Classdata