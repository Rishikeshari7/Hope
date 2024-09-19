import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import AboutPage from './pages/AboutPage'
import ReportPage from './pages/ReportPage'
import DonatePage from './pages/DonatePage'
import ProfilePage from './pages/ProfilePage'

function App() {

  return (
    <div className='w-screen'>
    <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>} ></Route>
        <Route path='/login' element={<LoginPage/>} ></Route>
        <Route path='/signup' element={<SignupPage/>} ></Route>
        <Route path='/about' element={<AboutPage/>} ></Route>
        <Route path='/report-fraud' element={<ReportPage/>} ></Route>
        <Route path='/donate' element={<DonatePage/>} ></Route>
        <Route path='/profile' element={<ProfilePage/>} > </Route>
      </Routes>
    </div>
  )
}

export default App
