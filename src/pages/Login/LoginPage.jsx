import React, { useContext, useState } from 'react'
import './login.css'
import assests from '../../assets/assets/assets'
import axios from "axios"
import { UserContext } from '../../UserContext'
const LoginPage = () => {
  const [currState, setCurrState]= useState("SignUp");
  const [username, setUsername] = useState("Surabhi");
  const [password, setPassword] = useState("sur2201");
  const [email,setEmail]= useState("surabhi@gmail.com");

  const {setUsername:setLoggedInUsername, setId}=useContext(UserContext)
  async function login(ev){
    ev.preventDefault()
    const data = await axios.post('http://localhost:4040/login', { username, password, email }, {
      withCredentials: true,
    }).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.error(error);
    });
    setLoggedInUsername(username);
    setId(data.id)
  }
  return (
    <div className='login'>
     
      <img src={assests.logo_big} alt="" className="logo" />
     <form className='login-form' onSubmit={login}>
        <h2 className='login-title'>{currState}</h2>
      {currState==="SignUp"?<input type="text" placeholder='Username' value= {username} onChange={(e)=>{
        setUsername(e.target.value);
      }} className="form-input" required/>:null} 
       <input type="email" placeholder= 'Email Address' className="form-input" value={email} onChange={(e)=>{
        setEmail(e.target.value);
       }} required />
       <input type="password" value= {password} onChange={(e)=>{
        setPassword(e.target.value);
       }} placeholder='Password' className="form-input" required/>
       <button type="submit"> {currState==="SignUp"?"Create Account":"Login To Account"}</button>
       <div className="login-terms">
        <input type='checkbox'/>
        <p>Agree To All Terms And Conditions</p>

     </div>
     <div className="already-logged">

{currState==="SignUp"?<p className="login-toggle">Already Have An Account <span onClick={()=>{
  setCurrState("SignIn");
}}>Click Here</span> </p>:
<p className="login-toggle">Don't Have An Account <span onClick={()=>{
  setCurrState("SignUp");
}}>Click Here</span> </p>}
</div>
     </form>
    
    
    </div>
  )
}

export default LoginPage
