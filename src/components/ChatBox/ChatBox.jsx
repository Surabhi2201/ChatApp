import React from 'react'
import assests from '../../assets/assets/assets'
import './Chatbox.css'
const ChatBox = () => {
  return (
    <div className='chat-box'>
      <div className="chat-user">
        <img src={assests.profile_img} alt="" />
        <p>Shravan Sonare <img src={assests.green_dot} className="dot" alt="" /></p>
        <img src={assests.help_icon} className='help' alt="" />
      </div>
      <div className="chat-msg">
        <div className="s-msg">
        <p className='msg'>Hey Bro</p>
          <div>
          <img src={assests.profile_img} alt="" />
          <p className='time'>19:00</p>
          
          </div>
          
        </div>
        <div className="r-msg">
        <img className='imageMsg' src={assests.pic1} alt="" />
          <div>
          <img src={assests.profile_img} alt="" />
          <p className='time'>19:00</p>
          
          </div>
          
        </div>
        
        <div className="r-msg">
        <p className='msg'>Hey Bro Hows everything</p>
          <div>
          <img src={assests.profile_img} alt="" />
          <p className='time'>19:00</p>
          
          </div>
         
        </div>
      </div>
      <div className="chat-input">
        <input type="text" placeholder='Send a message' />
        <input type="file" id="image" accept="image/png, image/jpeg" hidden/>
        <label htmlFor="image">
           <img src={assests.gallery_icon} alt="" />{/*Label tag used !! New Thing */}
        </label>
        <img src={assests.send_button} alt="" />
      </div>
      
    </div>
  )
}

export default ChatBox
