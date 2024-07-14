import Footer  from './footer';
import {Link } from "react-router-dom";
export const Navbar = () => {
    return (
      <div>
      <nav className="navbar">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Register">Register</Link>
          <Link to="/UserProfile">Users</Link>
        </div>
      </nav>
    </div>
    );
  }
   
  