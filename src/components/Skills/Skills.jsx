import React from 'react'
import './Skills.css';

const Skills = () => {
  
  return (
    <div> 
    <section className="section skills">
     
      <div  className="section-title">
        <h2>skills</h2>
        <div  className="underline"></div>
 
      <div  className="section-center skills-center">
        <article>
          <h3>Applying</h3>
        
          <div  className="skill">
            <p>HTML/CSS</p>
            <div  className="skill-container">
              <div  className="skill-value  value-80"></div>
              <p  className="skill-text
            skill-text-80  ">
                80%
              </p>
            </div>
          </div>
       
          <div  className="skill">
            <p>Javascript</p>
            <div className="skill-container">
              <div  className="skill-value value-80"></div>
              <p  className="skill-text skill-text-80">
                80%
              </p>
            </div>
          </div>
       
          <div className="skill">
            <p>React-JS</p>
            <div className="skill-container">
              <div className="skill-value value-70"></div>
              <p className="skill-text skill-text-70">
                70%
              </p>
            </div>
          </div>

           <div className="skill">
            <p>Docker</p>
            <div className="skill-container">
              <div className="skill-value value-70"></div>
              <p className="skill-text skill-text-70">
                70%
              </p>
            </div>
          </div>

           <div className="skill">
            <p>Tailwind css</p>
            <div className="skill-container">
              <div className="skill-value value-80"></div>
              <p className="skill-text skill-text-80">
                80%
              </p>
            </div>
          </div>
      
        </article>
        <article>
          <h3>On-Learning-track</h3>
      
          <div className="skill">
            <p>Node-JS</p>
            <div className="skill-container">
              <div className="skill-value value-30"></div>
              <p className="skill-text skill-text-30">
                30%
              </p>
            </div>
          </div>
 
      
          <div className="skill">
            <p>Python</p>
            <div className="skill-container">
              <div className="skill-value value-20"></div>
              <p className="skill-text skill-text-20">
                20%
              </p>
            </div>
          </div>
        
        </article>
      </div>
      </div>
    </section>
    </div>
  )
}

export default Skills
