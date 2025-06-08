import React from 'react'
import "./portfolio.css"
function Portfolio() {
    const Projects=[{
        Title:"Event Organizing Website",
        image:"/images/de.jpg",
        description:" A modern and user-friendly event organizing platform that allows users to plan, manage, and book events effortlessly. From weddings to corporate functions, the website offers venue listings, vendor coordination, customizable packages, and real-time booking features to simplify the entire event planning process.",
        Link:"https://github.com/Parveengill02/BookingEvents.git"
    },
    {
        Title:"Portfolio Website",
        image:"/images/my.webp",
        description:" A clean and modern personal website designed to present my professional profile, showcase completed projects, and provide easy access to my resume. It features a user-friendly layout, smooth transitions , and a structured presentation of my skills and detailed projects.",
        Link:"https://github.com/Parveengill02/MyPortfolio.git"
    }];
 
        return (
    <div id="Portfolio">
       <div className="portfolio">
          <div className='about'><h3 className="heading">My portfolio</h3></div>
          <div className='project-grid'>
           {Projects.map((project,index) => ( 
            <div key={index} className="project-card">
                <img src={project.image}/>
                <h4>{project.Title}</h4>
                <p>{project.description}</p>
                <a href={project.Link}><button>View Project</button></a>
            </div>

          ) )}

        
          </div>
        </div>    
    </div>
  )
}

export default Portfolio
