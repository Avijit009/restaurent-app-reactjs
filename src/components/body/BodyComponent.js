import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import Home from './Home';

const BodyComponent = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </div>
  )
}

export default BodyComponent