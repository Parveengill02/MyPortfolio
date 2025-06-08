import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './Components/HeroSection/heroSection';
import About from './Components/AboutSection/about';
import Skills from './Components/SkillsSection/skills';
import Portfolio from './Components/Portfolio/portfolio';
function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Skills/> 
      <Portfolio/>
    </div>
  )
}

export default App
