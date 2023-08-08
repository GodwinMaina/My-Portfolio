import React from 'react'
import  './About.css'
import Resume from './CV.pdf'


import Ipng from "../assets/images/hero.svg";

const About = () => {

  return (

<>
    <div className="section-title about-title">
            <h2>about me</h2>
            <div className="underline"></div>
          </div>

    <section className='about-container'>

     <div>
          <img src={Ipng} className="hero-photo"
            alt="about img"
          />
      </div>


   <div>
  <article className='about-text'>
  <h6 className='h'>
     Who am I?   <br></br><br></br>

    I am an undergraduate with a degree in computer science. Currently learning and implementing 
     projects to add my knowledge in using  different technologies.
     <br></br><br></br>
     I am more specific to fronted development where I am conversant with Javascript, Typescript, 
     ReactJS, HTML/CSS, Tailwind CSS and working with External API’s.

    <br></br><br></br>

  For more about me you can download my CV/Resume below. 

     
  </h6>
     

                     
  </article>

  <br></br><br></br>
        <button className='btn'
        style={{margin:"20px"}}>
   <a href={Resume} target="_blank" rel="noopener noreferrer" className='btn'>CV/Resume</a></button>
     
   </div>
  </section>
  </>
   
  )
}

export default About