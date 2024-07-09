import { Button, TextField, FormControl, Box} from "@mui/material";
import {Link, Route, Routes, redirect } from "react-router-dom";
import {UserProfile} from './UserProfile';
import { useState } from "react";

export const Login =(props)=>{
    
    const login = "Login"
    const [islogin, setLogin] =useState(false);


    const change =(event)=>{
        props.setUserName(event.target.value);
    }

   
    const userLogin = ()=>{
        //console.log(data)
        if(props.userName==='')
            alert("please enter user name");
        else alert("You are login as "+props.userName);
    }

   return (
    <div className="content">
        <Box component="form"
                sx={{
                 '& > :not(style)': { m: 2, width: '30ch', height:"5%", size:"small"} ,
                }}autoComplete="off" border={2} bgcolor={"white"} maxWidth={300}>
        <FormControl fullWidth> 
         <TextField size="small" id="name" label="User Name" variant="outlined" onChange={change} required/>
             <br/>
         <TextField size="small" type="password" label="Password" variant="outlined" required/>
       </FormControl> <br/>
       <Button variant="contained" onClick={userLogin}>{login}</Button>
       <Link to="/Register" postion="right">Don't have password</Link>
       </Box>
       
       <h1>Your are Logging as {props.userName}</h1>
    </div>
   );
}