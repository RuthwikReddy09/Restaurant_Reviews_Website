import React, { useContext, useState } from 'react';
import {FaUserCircle} from "react-icons/fa"
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import UserContext from './Context';
function Navbar() {
  const [menu, setMenu] = useState(false);
  const [context, setContext] = useContext(UserContext);

  function navMenu(e) {
    setMenu(!menu);
  }

  return (
    <>
      <div className="navbar">
        <Link className="navlogo" to="/">
          Star&#9734;Dining
        </Link>
        <div className="navlinks">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/logout">Logout</Link>
          <Link to="#" id="usericon"><FaUserCircle size={18}/> {context}</Link>
        </div>

        <div className="menu" onClick={navMenu}>
          <AiOutlineMenu size={25} />
        </div>
      </div>
      {menu &&
        <div className='sidebar'>
          <div className='menu' onClick={navMenu}>
            <AiOutlineMenu size={25} />
          </div>  
          <h2 className="sidelogo">
            Star&#9734;Dining
          </h2>
          <div className="sidelinks">
            <Link to="/" onClick={navMenu}>Home</Link>
            <Link to="/about" onClick={navMenu}>About</Link>
            <Link to="/contact" onClick={navMenu}>Contact</Link>
            <Link to="/register" onClick={navMenu}>Register</Link>
            <Link to="/login" onClick={navMenu}>Login</Link>
            <Link to="/logout" onClick={navMenu}>Logout</Link>
            <Link to="#" id="usericon"><FaUserCircle  size={18}/> {context}</Link>
          </div>
        </div>}
    </>

  )
}

export default Navbar;
