import { useState } from "react";
import { Button } from "react-bootstrap";
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
    
    return (
      <div className="home">
        <h2>State Example 1</h2>
        <button onClick={decrease}><b> - </b></button>
        &nbsp; { num }  &nbsp; 
        <button onClick={increase}><b>+</b></button>

        <h2>State Example 2</h2>
        Name<input type="text"/>
        Email<input type="text"/>
        <button onClick={()=>{setMore(!ismore)}}>{ismore? "Less": "More"}</button>
        <button>{ismore && 
            <div>
              Gender<input type="text"></input>
              Age<input type="text"></input>
              <h3>This is hidden section</h3>
              <h3>This is hidden section</h3>
              <h3>This is hidden section</h3>
              <h3>This is hidden section</h3>
            </div> 
          }</button>
        <div className="addList">
          <h2>Dynamic list with add and delete operations</h2>
          
          <input onChange={change}/>
          <Button onClick={addList} className="add">Add List</Button>
          <h3>List of Items</h3>
        </div>
        <div className="List">
          <ol>
          {list.map((name) =>{
              return (
                      <li>{name} &nbsp;
                      <Button onClick={()=>deleteList(name)} className="warning"> X </Button> </li>
                    
            )})} </ol>     
        </div>
      </div>
    );
  }
   
 