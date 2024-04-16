import React, { useState } from 'react'
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import "./Auth.css";

const Auth = () => {
    const [LoginSelected, setLoginSelected] = useState(true);
  return (
    <div className='box'>
        {LoginSelected?<Login/>:<SignUp/>}
       
     <button onClick={()=>{setLoginSelected(true)}} className='signup'>Login</button>
     <button onClick={()=>{setLoginSelected(false)}} className='signup'>SignUp</button>
      
    </div>
  )
}

export default Auth
