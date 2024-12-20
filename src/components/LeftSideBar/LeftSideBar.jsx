import React, { useState } from 'react'
import './LeftSideBar.css'
import assests from '../../assets/assets/assets'
const LeftSideBar = () => {
  const [showMenu ,setShowMenu] = useState(false);
  return (
    <div>
      <div className="ls">
        <div className="ls-top">
          <div className="ls-nav">
            <img src={assests.logo} alt="" className="logo" />
            <div className="menu">
              <img src={assests.menu_icon} alt="" />
              <div className='sub-menu'>
                <p>Edit Profile</p>
                <hr>
                </hr>
                <p>Logout</p>
              </div>
            </div>
          </div>
          <div className="ls-search">
            <img src={assests.search_icon} alt="" />
            <input placeholder='Search for the name....'/>
          </div>
          <div className="ls-list">
            {Array(12).fill("").map((item,index)=>{
              return ( <div key={index} className="friends">
                <img src={assests.profile_img} alt="" />
              <div>
              <p>Shravan Sonare</p>
              <span>How are you?</span>
              </div>
              </div>)
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSideBar
