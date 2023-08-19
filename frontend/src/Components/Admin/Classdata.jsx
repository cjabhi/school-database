import { Box, Button, HStack, VStack , Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Invidual from './Invidual';
import { useNavigate } from 'react-router-dom';

const Classdata = () => {
    const  navigate = useNavigate();
    const [fetching , setFetching] = useState(false);
    const valid = sessionStorage.getItem("value");
    const [size , setSize] = useState(0);
    const it = useParams();
    console.log(it)
    const [data , setData] = useState([])
    async function getdata(){
        try{
          setFetching(true);
            const std = it.i;
            
            const response = await fetch(`https://school-database.onrender.com/class/${std}`);
            // setData(response.json());
            const result = await response.json();
            if(!response.ok)
            {
              setFetching(false);
                console.log(result.error);
            }
            if(response.ok){
                setFetching(false);
                setData(result);
                setSize(data.length);
                console.log(data);
                console.log(size);
            }
        }catch(error){
          setFetching(false);
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
    {
      fetching ? (<Spinner position={'absolute'} top={'45vh'} left={'40vw'} />) : (
        <div style={{
          display:"flex",
          justifyContent:"center",
      alignItems:"center"
    }} >
        <Link to={'/addstudent'} >
          <Button margin={'auto'}  >Add a new student</Button>
        </Link>
    </div>

      
    )
  }
    {   data.length===0 && fetching==false ? <div>There is no student in class {it.i}</div> :

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