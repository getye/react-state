import { BrowserRouter, Routes, Route,} from "react-router-dom";
import {Home} from "./Home";
import {Login} from "./login";
import {Contact} from "./Contact";
import {Navbar} from './Navbar';
import {UserProfile} from './UserProfile';
import { useState } from "react";


function App() {
  const [userName, setUserName] = useState("");
  return (
    <div >
      <BrowserRouter>
        <Navbar/>
        <div className="content">
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Login" element={<Login userName={userName} setUserName={setUserName}/>}/>
              <Route path="/Contact" element={<Contact/>}/>
              <Route path="/UserProfile" element={<UserProfile userName={userName} setUserName={setUserName}/>}/>
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
