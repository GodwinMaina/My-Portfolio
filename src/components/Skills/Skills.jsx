import React from 'react'
import './Skills.css';

const Skills = () => {
  
  return (
   <section className='skill'>

    <h2 className="service-section-title"
   style={{paddingTop:"1rem" , color:"white"}}>Skills</h2>
    <div className="section-underline"></div>
  
   <div className='para'>I've worked with a range of technologies in web development. <br />
Front-End, Back-End and Cloud technologies.</div>
 <h2 className='tech'>Technologies</h2>
 
   <ul className='order'>
     <li className='none'>
    <div className='yes'>
      <h4 className='header'>Front-End</h4>
      <p className='peru'>
      Experience with <br />
      HTML, CSS & Tailwind css, JavaScript, React  
      </p>
    </div>
    </li>
 
     <li className='none'>
    <div className='yes'>
      <h4 className='header'>Back-End</h4>
      <p className='peru'>
      Experience with <br />
      Node Js, Mongodb and MSSQL.
      </p>
    </div>
    </li>

     <li className='none'>
    <div className='yes'>
      <h4 className='header'>Cloud</h4>
      <p className='peru'>
      Experience with <br />
      Netlify and AWS  
      </p>
    </div>
    </li>
    
   </ul>

   </section>
   



  )
}

export default Skills

