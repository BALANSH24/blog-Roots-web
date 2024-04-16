import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
   
      
      <nav className="navbar">
        <div className="nav-logo">
            <img src="logo12.png" alt=""  height="60px" width="70px"/>
        <h1>Roots</h1>
        </div>
               <div className="nav-actions">
               <a href="http://localhost:5173/">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="http://localhost:5173/profile">Profile</a>
                <a href="http://localhost:5173/auth">Login/Signup</a>
               </div>
            </nav>
  
  )
}

export default Navbar
