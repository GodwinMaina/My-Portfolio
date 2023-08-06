import React from 'react'
import  './About.css'
import Resume from './CV.pdf'


import Ipng from "../assets/images/hero.svg";

const About = () => {

  return (

<>
    <div class="section-title about-title">
            <h2>about me</h2>
            <div class="underline"></div>
          </div>

    <section className='about-container'>

     <div>
          <img src={Ipng} className="hero-photo"
            alt="about img"
          />
      </div>


   <div>
        <article className='about-text'>

        Who am I?<br></br><br></br>
        
        I'm an-undergraduate-fro-karatina-uniersity-where-i-studied-coputer-science-from Nairobi Kenya. I am currently studying computer science Karatina University, and
        started my career in IT at Bitbyte , a company I still work with, I am passionate about systems 
        automation and I also work as a freelancer. To learn more about my skills and my career click 
        and download my resume.
                     
  </article>
  <br></br><br></br>
        <button
        className='btn'>
   <a href={Resume} target="_blank" rel="noopener noreferrer" className='btn'>Resume/CV</a>
   {/* https://twitter.com/GodwinTerrific */}
</button>
     
   </div>
  </section>
  </>

    
   
  )
}

export default About