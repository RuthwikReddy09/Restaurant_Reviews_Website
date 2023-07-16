import React, { useState } from 'react';
import { IoSearchCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [menu, setMenu] = useState(false);
  function navMenu(e) {
    setMenu(!menu);
  }
  return (
    <>
      <div className="navbar">
        <h2 className="navlogo">
          Star&#9734;Dining
        </h2>
        <div className="navlinks">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/logout">Logout</Link>
        </div>
        <div className="navsearch">
          <label htmlFor="search" className='sicon'><IoSearchCircleSharp color='rgb(255, 56, 92)' size={30} /></label>
          <input name="search" type="text" placeholder=" Search Restaurants" />
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
          <div className="sidesearch">
            <label htmlFor="search" className='sicon'><IoSearchCircleSharp color='rgb(255, 56, 92)' size={30} /></label>
            <input name="search" type="text" placeholder=" Search Restaurants" />
          </div>
          <div className="sidelinks">
            <Link to="/" onClick={navMenu}>Home</Link>
            <Link to="/about" onClick={navMenu}>About</Link>
            <Link to="/contact" onClick={navMenu}>Contact</Link>
            <Link to="/login" onClick={navMenu}>Login</Link>
            <Link to="/register" onClick={navMenu}>Register</Link>
            <Link to="/logout" onClick={navMenu}>Logout</Link>
          </div>
        </div>}
    </>

  )
}

export default Navbar;
