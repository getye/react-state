import { useState } from "react";
import { Button , Grid, Box} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import { Counter } from './action/counter';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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
      <div className="home" spacing={2}>
        <Grid container m={0} spacing={1}>
        <Grid item xs={5} border={1}>
        <h2>Local State Example 1</h2>
        <Button variant="contained" size="small" color="secondary" onClick={decrease}>- </Button>
        &nbsp; { num }  &nbsp; 
        <Button variant="contained" size="small" color="primary" onClick={increase}>+</Button>

        <h2>Local State Example 2</h2><br/>
        <TextField variant="outlined" label="Enter User Name" size="small" required/><br/><br/>
        <TextField variant="outlined" label="Enter your Email" size="small" type="email" required/>
        <Button variant="outlined" color={ismore? color2: color1} size="small" onClick={()=>{setMore(!ismore)}}>{ismore? "Less": "More"}</Button>
        {ismore && 
            <div> <br/>
             <TextField variant="outlined" label="Enter your age" size="small" type="number"/><br/>
              <FormControl >
                <FormLabel id="gender">Gender</FormLabel>
                <RadioGroup aria-labelledby="gender" defaultValue="female" size="small">
                  <FormControlLabel value="female" control={<Radio />} label="Female" size="small"/>
                  <FormControlLabel value="male" control={<Radio />} label="Male" size="small"/>
                </RadioGroup>
              </FormControl><br/>

            </div> 
          }
          </Grid> &nbsp; &nbsp; 
          <Grid item xs={6} border={1}>
          <div>
            <h2>Redux Global State Management</h2>
             <Counter />
          </div>
        <div className="addList">
          <h3>Dynamic list with add and delete operations</h3>
          
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
        </Grid>
        </Grid>
      </div>
    );
  }
   
 