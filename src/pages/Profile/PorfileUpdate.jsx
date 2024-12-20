import React, { useState } from 'react'
import './ProfileUpdate.css'
import assets from '../../assets/assets/assets'
const PorfileUpdate = () => {
  const [image, setImage] = useState(false);
  console.log(image);
  return (
    <div className='profile'>
       <div className="profile-details">
        
         <form >
         <h2>Profile Details</h2>
          <label htmlFor='avatar'>
            <input onChange={(e)=>{setImage(e.target.files[0])}} type='file' id='avatar' accept='.jpeg, .png, .jpg' hidden></input>
            <img src={image? URL.createObjectURL(image):assets.avatar_icon} alt="" />
            upload profile image
          </label>
          <input placeholder='Enter your name'></input>
          <textarea placeholder='Enter your bio'/>
          <button>Save</button>
         </form>
         <img className='profile-app-icon' src={image? URL.createObjectURL(image):assets.logo_icon} alt="" />
       </div>
        
    </div>
  )
}

export default PorfileUpdate
