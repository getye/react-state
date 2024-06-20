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
        <button onClick={decrease}><b>-</b></button>
              { num }   
        <button onClick={increase}><b>+</b></button>

        <h2>State Example 2</h2>
        Name<input type="text"/>
        Email<input type="text"/>
        <button onClick={()=>{setMore(!ismore)}}>More/Less</button>
        <button>{ismore && 
          <more>
            Gender<input type="text"></input>
            Age<input type="text"></input>
          </more> 
          }</button>
        <div className="addList">
          <h2>Dynamic list</h2>
          
          <input onChange={change}/>
          <Button onClick={addList}>Add List</Button>
        </div>
        <div className="List">
        {list.map((name) =>{
            return <div> 
                    {name}
                    <Button onClick={()=>deleteList(name)} >X</Button> 
                 </div>
           })}
          
          
          
        </div>
      </div>
    );
  }
   
 