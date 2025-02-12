import React from 'react'

import './App.css';
import { StickyNavbar } from './components/StickyNavbar';
import Hero from './components/Hero';
import Imageslider from './components/Imageslider';

const App = () => {
  return (
    <div>
     <StickyNavbar></StickyNavbar>
     <Hero></Hero>
     <Imageslider></Imageslider>
    <Imageslider></Imageslider>
    
    </div>
  )
}

export default App