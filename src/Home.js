import { useState } from "react";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import SendIcon from '@mui/icons-material/Send';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
export const Home = () => {
    
    
    const [num, setNum] =useState(1);
    const [ismore, setMore] =useState(false);
    const [list, setList] =useState([]);
    const [task, setTask] =useState("");

    const increase = () => {
         setNum (num+1);    
    }
    const decrease = () => {
      setNum (num-1);  
    }

    const change = (event) => {
      setTask(event.target.value);
    }
  
    const addList = (event) => {
      setList([...list,task]);
    }

    const deleteList = (listName) => {
      setList(list.filter((name)=> listName !== name));
    }
    const color1="primary";
    const color2="secondary";
  
    return (
      <div className="home">
        <h2>State Example 1</h2>
        <Button variant="contained" size="small" color="secondary" onClick={decrease}>- </Button>
        &nbsp; { num }  &nbsp; 
        <Button variant="contained" size="small" color="primary" onClick={increase}>+</Button>

        <h2>State Example 2</h2>
        Name<input type="text"/>
        Email<input type="text"/>
        <Button variant="outlined" color={ismore? color2: color1} size="small" onClick={()=>{setMore(!ismore)}}>{ismore? "Less": "More"}</Button>
        {ismore && 
            <div>
              Gender<input type="text"></input>
              Age<input type="number"></input>

              <h3>This is hidden section</h3>
              <h3>This is hidden section</h3>
              <h3>This is hidden section</h3>
              <h3>This is hidden section</h3>
            </div> 
          }
        <div className="addList">
          <h2>Dynamic list with add and delete operations</h2>
          
          <TextField variant="filled" label="Enter List Name" size="small" onChange={change}/>&nbsp;
          <Button variant="contained" color="success"  onClick={addList} className="add">Add List</Button>
          <h3>List of Items</h3>
        </div>
        <div className="List">
          <ol>
          {list.map((name) =>{
              return (
                      <li>{name} &nbsp;
                      
                      <Button title="Delete List" variant="text" color="error" startIcon={<DeleteIcon />} size="small" onClick={()=>deleteList(name)} className="warning"/> 
                      </li>
                      
            )})} </ol>     
        </div>
      </div>
    );
  }
   
 