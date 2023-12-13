import React, {useEffect, useState} from 'react'
import About from './components/About'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import ContactMe from "./components/ContactMe"
import { useLocation } from 'react-router-dom'
import {Route, Routes, } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'


const App = () => {
  const location = useLocation();

  return (
<> 
  <Nav/>
  <AnimatePresence initial={false} >
      <Routes   location={location} key={location.pathname}>
          <Route path='/' element={<Hero/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<ContactMe/>}/>
      </Routes>
  </AnimatePresence>
</>   
  )
}

export default App

