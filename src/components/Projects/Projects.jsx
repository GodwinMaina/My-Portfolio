import React, { useEffect, useState } from 'react'
import './Projects.css';
import Projectoz from '../../partials/Project'; 
import { FaChevronLeft,FaChevronRight} from "react-icons/fa";

// import Slider from "react-slider";
const Projects = () => {

  const [project,setProject]=useState(Projectoz);
  const [index,setIndex]=useState(0);

//useEffect-to-know-when-we-run-out-of-list-index
//chck-state-alue-and-flip-around--if-negatie-back-to-zero-bigger-than-index-flip-to-zero

  useEffect(()=>{

    //first-get-last-index-of-array
    const lastIndex=project.length-1;
    // check-index-if-negatie-then-set-to-last-index
    if(index<0) {
      setIndex(lastIndex)
    }
    //if-we-run-out-of-ites-index-bigger-than-last-ite-then-go-to-first-ite

    if(index>lastIndex){
      setIndex(0);
    }

},[index,project]);


//useEffect-to-Autoslide
//eerytie--our--index--changes--setInteral-run

useEffect(()=>{
let slider= setInterval(()=>{
    //in-3-sec-change-setIndex+1
    setIndex(index+1)

    //3-sec
  },5000);

  //clear-Interal
  return ()=>clearInterval(slider)
},[index]);



  return (
  
  
<section className="project">
  <h2 className="service-section-title"
   style={{paddingTop:"1rem"}}>My Projects</h2>   
 <div className="section-underline">{setProject}</div>

    
<div className='project-center'>
 {Projectoz.map((item,projectIndex)=>{
  
  const { id,Image,title,stack,Description}=item; 

  let position='nextSlide';
  if(projectIndex===index)
  
  {
      position='activeSlide';
  }

    
  if(projectIndex===index-1 || (index===0  && projectIndex  ===  project.length-1))
  {
    position='lastSlide';
  }

return(

<header className={position} key={id}>
<div>

<img
  src={Image} alt={title} className='project-img'/>
  <h4 >{title}</h4>
  <h3>{stack}</h3>

  <p className='text'>{Description}</p>
</div>
</header>
);
   })}

  <button className='prev' onClick={()=>setIndex(index-1)}><FaChevronLeft/></button>

 <button className='next' onClick={()=>setIndex(index+1)}><FaChevronRight/></button>

</div>

<div>
  <h2  style={{textAlign:"center"}}>Working-On-Currently....</h2>
  <div>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odit laboriosam ullam? Eaque, vero deleniti provident officiis explicabo similique id ab deserunt voluptas beatae delectuid ab deserunt voluptas beatae delectus harum ducimus, dolores ullam odit.<a href="https://" target="_blan" rel="noopener noreferrer">#</a>
     </p>

     <p style={{textAlign:"center"}} >To access more of my projects visit my github-account
     <br />

    <button className='btn'><a href="https://github.com/GodwinTerrific" target="_blank" rel="noopener noreferrer" >TO-my-github </a></button>
     </p>
   
   </div>
  </div>

  </section>

    
  )
}
export default Projects;



 


