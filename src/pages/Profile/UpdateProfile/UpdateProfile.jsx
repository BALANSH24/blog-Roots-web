import React from 'react'
import './UpdateProfile.css'

const UpdateProfile = () => {
  return (
    <div className='profile-div'>
      <h1>Update Profile</h1>
      <form action="" className='form-div'>

        <label htmlFor="">username</label>
        <input type="text" placeholder='username' />
        <br />
        <label htmlFor="">profile photo</label>
        <input type="file" />
        <br />
        <label htmlFor="">bio</label>
        <input type="text" placeholder='bio' />
        <br />
        <button type='button'>Submit</button>
      </form>
    </div>
  )
}

export default UpdateProfile
