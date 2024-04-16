import React, { useState } from 'react'
import useSignUp from '../../../hooks/useSignUp'

const SignUp = () => {
    const {SignUp} = useSignUp();
    const [data , setData] = useState({
        username:'',
        email:'',
        password:'',
    })
    const handleSubmit = (e)=>{
        e.preventDefault();
        SignUp(data);
    }
  return (
    <div>
        <div className="container">
    <h1>Signup</h1>
    <form action="#" onSubmit={handleSubmit}>
        <label for="username">Username:</label>
        <input onChange={(e)=>{setData({...data,username:e.target.value})}} type="text" id="username" name="username" placeholder="Enter your username" required/>
        <label for="number">Phone Number:</label>
        <input type="number" id="number" name="number" placeholder="Enter your number" required/>
        
        <label for="email">Email:</label>
        <input onChange={(e)=>{setData({...data,email:e.target.value})}} type="email" id="email" name="email" placeholder="Enter your email" required/>
        
        <label for="password">Password:</label>
        <input onChange={(e)=>{setData({...data,password:e.target.value})}} type="password" id="password" name="password" placeholder="Enter your password" required/>
        
        <button type="submit" className='signupin'>SignUp</button>
    </form>
    </div>
      
    </div>
  )
}

export default SignUp
