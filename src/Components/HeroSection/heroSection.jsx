import React from 'react'
import './heroSection.css'
function HeroSection() {
  return (
    <div id="home">
        <div className="herosection">
             <div className="leftSec">
                <div className="content">
                      <h1><span className='firstletter'>P</span>arveen <span className='firstletter'>K</span>aur</h1>
             <p>Loves turning ideas into interactive digital experiences. Enjoys working with modern web technologies and continuously learning to stay up to date with the latest trends in web development.</p>
                   <div className="btn">
                    <a href="/images/resume.pdf"target="_blank" rel="noopener noreferrer"><button>View Resume</button></a>
                    <a href="/images/resume.pdf" download><button><span><img src="/images/dicon.png"/></span>Download Resume</button></a>
                   </div>
                </div>
           </div>
         <div className="rightSec">
              <div className='shape'></div> 
              <img className="heroImg" src="/images/parveengill.jpg" alt="Parveen" />
         </div>
        </div>
        
    </div>
  )
}

export default HeroSection
