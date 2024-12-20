import React from 'react'
import './RightSideBar.css'
import assest from '../../assets/assets/assets'
const RightSideBar = () => {
  return (
    <div className='rs'>
      <div className="rs-profile">
         
          <img src={assest.profile_img} alt="" />
          <h3>Shravan Sonare <img className='dot' src={assest.green_dot} alt="" /></h3>
          <p>Success comes only after failure</p>
      </div>
      <div className="rs-media">
        <p>Media</p>
         <div>
          <img src={assest.pic1} alt="" />
          <img src={assest.pic2} alt="" />
          <img src={assest.pic3} alt="" />
          <img src={assest.pic4} alt="" />
          <img src={assest.pic1} alt="" />
          <img src={assest.pic1} alt="" />
          
         </div>
        
      </div>
      <button>
          Logout
         </button>
    </div>
  )
}

export default RightSideBar
