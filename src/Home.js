import { useState } from "react";
const Home = () => {
    const [num, setNum] =useState(1);
    const [ismore, setMore] =useState(false);

    const increase = () => {
         setNum (num+1);    
    }
    const decrease = () => {
      setNum (num-1);  
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
      </div>
    );
  }
   
  export default Home;