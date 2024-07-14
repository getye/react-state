import { useState } from "react";
import { Button , Grid, Box} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import { Counter } from './action/counter';

export const Home = () => {
    let n=0;
    
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
        <button class="bg-pink-500 hover:bg-pink-700 w-10" onClick={decrease}>- </button> 
        <input type="text" value={ num }  class="w-25"/>
        <button class="bg-sky-500 hover:bg-sky-700 w-10"   onClick={increase}>+</button>

        <h2>Local State Example 2</h2>
            <label class="block text-sm font-semibold text-slate-700">Username</label>
            <input type="text" placeholder="Enter user name"class="block w-auto"/>
            <label class="block text-sm font-semibold text-slate-700">Email</label>
            <input type="email" placeholder="Enter Email"class="peer"/>
            <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Please provide a valid email address.</p>
        <Button variant="contained" color={ismore? color2: color1} size="small" onClick={()=>{setMore(!ismore)}}>{ismore? "Less": "More"}</Button>
        {ismore && 
            <div>
             <label class="block text-sm font-semibold text-slate-700">Age</label>
             <input type="number" placeholder="Enter Age"/><br/>
             <h3 class="mb-0 font-semibold text-gray-900 dark:text-white">Gender</h3>
              <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <li class="w-full border-b border-gray-200 rounded-t-sm dark:border-gray-600">
                      <div class="flex items-center ps-3">
                          <input id="gender-female" type="radio" value="F" name="gender" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                          <label for="gender-female" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female </label>
                      </div>
                  </li>
                  <li class="w-full border-b border-gray-200 rounded-t-sm dark:border-gray-600">
                      <div class="flex items-center ps-3">
                          <input id="gender-male" type="radio" value="M" name="gender" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                          <label for="gender-male" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                      </div>
                  </li>
              </ul>

            </div> 
          }
          </Grid> &nbsp; &nbsp; 
          <Grid item xs={6} border={1}>
          <div>
            <h2>Redux Global State Management</h2>
             <Counter />
          </div>
        <div className="addList">
          <label class="block text-sm font-semibold text-slate-700">Dynamic list with add and delete operations</label>
             <input type="text" placeholder="Enter List Name" onChange={change}/>
             <button class="bg-sky-500 hover:bg-lime-600 w-16" onClick={addList}>Add List</button>
        </div>
        <table class="my-3 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <tbody class="px-2 py-3 bg-gray-100">
          <tr class="bg-slate-500">
          <th>No.</th>
          <th>List Name</th>
          <th>Delete</th>
          </tr>
          {list.map((name) =>{
            n++;
              return (
                <tr class="odd:bg-white even:bg-slate-300">
                  <td>{n} &nbsp;</td>
                  <td>{name} &nbsp;</td>
                      <td>
                      <Button title="Delete List" variant="text" startIcon={<DeleteIcon />} size="small" onClick={()=>deleteList(name)} className="warning"/> 
                      </td>
                </tr>
            )})} </tbody> </table>   
        </Grid>
        </Grid>
      </div>
    );
  }
   
 