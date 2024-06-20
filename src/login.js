

import {UserProfile} from './UserProfile';




export const Login =(props)=>{
    
    const login = "Login"


    const change =(event)=>{
        props.setUserName(event.target.value);
    }


   return (
    <div>

        <div> 
        <lable>User Name</lable> <input type="text" placeholder="User name" onChange={change}/>
        </div>
       <div>
       <lable>Password </lable>  <input type="pasword" placeholder="Password"/>
       </div>
       <div className="content">
        <input type="submit" value={login} />
       </div>
       <h1>Your are Logging us {props.userName}</h1>
    </div>
   );
}