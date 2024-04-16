import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Auth from './pages/Auth/Auth'
import Profile from './pages/Profile/Profile'
import Navbar from './Components/Navbar/Navbar'
import Createpost from './pages/Createpost/Createpost'
import UpdateProfile from './pages/Profile/UpdateProfile/UpdateProfile'
import Contact from './pages/Contact/Contact'

const App = () => {
  const navigate = useNavigate();
  useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("bloguser"));
        if(!user){
            navigate('/auth')
        }
  },[])
  return (
    <div className="">
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/auth' element={<Auth/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/createpost' element={<Createpost/>} />
      <Route path='/updateprofile' element={<UpdateProfile/>} />
      <Route path='/contact' element={<Contact/>} />
      
      
    </Routes>
    </div>

  )
}

export default App
