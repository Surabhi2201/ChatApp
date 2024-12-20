import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import Chat from './pages/Chat/Chat'
import PorfileUpdate from './pages/Profile/PorfileUpdate'
import axios from "axios"
import { UserContext, UserContextProvider } from './UserContext'
function App() {
  axios.defaults.baseURL = 'http://localhost:4040'
  axios.defaults.withCredentials= true;

  return (
    <>
    <UserContextProvider>
    <Routes>
        <Route path='' element = {<LoginPage/>}/>
        <Route path='/chat' element = {<Chat/>}/>
        <Route path='/profile' element = {<PorfileUpdate/>}/>
     </Routes>
    </UserContextProvider>
    </>
  )
}

export default App
