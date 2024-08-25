import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'



export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/sign-in" element={<Signin/>}></Route>
      <Route path="/sign-up" element={<SignUp/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
