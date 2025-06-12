import React from 'react'
import './navbar.css'
import { Link } from 'react-scroll'
function Navbar() {
  return (
    <div style={{position:'sticky', top:0, zIndex:2}}>
     
      <nav className='navbar'>
        <div className='left'>
           <div className="logo">
          <img src="/images/weblo.webp" alt=""/>
          </div>
          <div>
          <h4>PARVEEN
            
          </h4>
          <p> Web Developer</p>
        </div>
     </div>
      <div>
        <ul>
         <Link to="home" smooth={true} offset={-100}duration={200}><li>Home</li></Link> 
          <Link to="about" smooth={true} offset={-70}duration={200}><li>About</li></Link> 
         <Link to="skill" smooth={true}offset={-100} duration={200}><li>Skills</li></Link> 
           <Link to="Portfolio" smooth={true} duration={200}><li>Portfolio</li></Link> 
          <Link to="Contact" smooth={true} duration={200}><li>Contact</li></Link> 
        </ul>
      </div>
      </nav>
    
    </div>
  )
}

export default Navbar
