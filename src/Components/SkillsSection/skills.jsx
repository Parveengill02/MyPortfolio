import React from 'react'
import "./skills.css"
function Skills() {
  return (
    <div id="skill">
        <div className='skills'>
             <div className='about'><h3 className="heading">Skills</h3></div>
           <div className="allSkills"> <div className="skill">
                 <img src="/images/react.png"/><br/>
                 <label>React</label>
            </div>
            {/* <div className="box"> */}
               <div className="skill">
                 <img src="/images/html.png"/><br/>
                 <label>HTML5</label>
            </div>
            <div className="skill">
                 <img src="/images/css.png"/><br/>
                 <label>CSS</label>
            </div>
                {/* </div>  */}
          
             <div className="skill">
                 <img src="/images/js.png"/><br/>
                 <label>Js</label>
           
</div>
<div className="skill">
                 <img src="/images/node.png"/><br/>
                 <label>Node Js</label>
            </div><div className="skill">
                 <img src="/images/express.png"/><br/>
                 <label>Express</label>
            </div><div className="skill">
                 <img src="/images/mysql.png"/><br/>
                 <label>MySQL</label>
            </div>
      </div>     
        </div>
      
    </div>
  )
}

export default Skills
