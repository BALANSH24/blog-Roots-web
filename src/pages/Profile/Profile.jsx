import React from 'react'
import './Profile.css'

const Profile=()=> {
  const user = JSON.parse(localStorage.getItem("bloguser"));

  
  return (
    <div className='box'>
      <header className="profile-header">
    <div className="profile-pic">
      <img src="images.jpeg" alt="Profile Picture"/> </div>
    <div className="profile-info">
      <h1>{user.username}</h1>
      <label >bio:</label>
       <p className="bio">{user.bio}</p> </div>
  </header>

  <section className="posts">
    <h2>Posts</h2>
    </section>
    </div>
  )
}

export default Profile
