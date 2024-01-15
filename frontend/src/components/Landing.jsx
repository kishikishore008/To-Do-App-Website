import { Button, Typography, rgbToHex } from '@mui/material'
import Textfield from '@mui/material/TextField'
import Card from '@mui/material/Card'
import { useState } from 'react'
// const axios = require('axios');
import axios from 'axios';




export function Landing(){


    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");

    return(
        <>
       <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgb(144, 164, 174)'}}>
        <Card variant="outlined" style={{marginLeft:'50px',marginTop:'50px',backgroundColor:'rgb(167, 199, 231)',width:'500px',justifyContent:'center',padding:'100px',alignItems:'center'}}>
          <Typography variant="h1" style={{textAlign:'center'}}>To-Do</Typography>
          <Typography variant="h4" style={{textAlign:'center'}}>"focus one task at a time"</Typography>
          <div style={{marginTop:'50px'}}>
          <Textfield variant="standard" label="Title" id="title" style={{marginTop:'5px'}}
            onChange={(e)=>{
            const value=e.target.value;
            setTitle(e.target.value);
            }}
          
          
          
          /><br />
          <Textfield variant="standard" label="Description" id="description" style={{marginTop:'20px'}}
              onChange={(e)=>{
                const value=e.target.value;
                setDescription(e.target.value);
                }}
              
          
          
          
          
          
          /><br />
         <Button style={{marginTop:'30px',}} onClick={()=>{
            axios.post('http://localhost:3000/todos',{title,description})
            .then(async (res)=>{ 
              alert("todo added !")
              const data = await res.data
               return  data;
               
            })
         }}>Create</Button>
          <Button variant="outlined"  onClick={()=>{}} style={{marginLeft:'300px',marginTop:'0px'}}> View Todo List →</Button>
          </div>
        </Card>
        </div>




        </>
    )
}