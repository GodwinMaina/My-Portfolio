import React from 'react'
import './Projects.css'


const Projects = () => {
  return (
   
   <div className='projects'>
    <h2 className="service-section-title">Projects</h2>
    
     <div className="section-underline"></div>
    
   {/* <h3 class="title-page">Projects</h3> */}
    <h2>latest work projects</h2>
    <div class="item-projects img-1">
    <div class="img-overlay"></div>
    <a href="https://" target="_blank" rel="noopener noreferrer">
    <h3>molynew</h3>
        <p>Project at molynew 2022 </p></a>
  </div>
 <div class="item-projects img-2">
  <a href="https://molyhost.com" target="_blank" rel="noopener noreferrer">
  <h3>Molyhost </h3>
  <p>Site made to test and improve my knowledge with react and APIs.</p>
    </a>
 </div>
   
   <h2>projects currently Working on</h2>

   

    <div>
  
    <p>To access more of my projects visit my github-account</p>
    <button className='btn'><a href="https://github.com/GodwinTerrific" target="_blank" rel="noopener noreferrer" >TO-github </a></button>
   
    </div>


   </div>
  )
}

export default Projects