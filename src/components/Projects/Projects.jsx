import React, { useEffect, useState } from 'react'
import './Projects.css';
import Projectoz from '../../partials/Project'; 
import { FaChevronLeft,FaChevronRight} from "react-icons/fa";

const Projects = () => {

  const [project,setProject]=useState(Projectoz);
  const [index,setIndex]=useState(0);

//useEffect to know when we run out of list index
//check state value and-flip around if -ve set to zero, bigger than index flip to zero

  useEffect(()=>{

    //getting last index of array
    const lastIndex=project.length-1;
    // check index if -ve and set it to last index
    if(index<0) {
      setIndex(lastIndex)
    }

    //if run out of index and bigger than last index go to first item
    if(index>lastIndex){
      setIndex(0);
    }

},[index,project]);


//useEffect-to-Autoslide
//everytime index changes setInterval runs

useEffect(()=>{
let slider= setInterval(()=>{
    //in-3-sec-change-setIndex+1
    setIndex(index+1)

    //3-sec
  },10000);

  //clear Interval
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
  <section className='workingon-projects'>

  <div>
  <h3>course Managment App</h3>
  <p>This project will be about course management</p>
  </div>


  <div>
  <h3>E-commerce site</h3>
  <p>This project will be about course management</p>
  </div>

<div>
  <h3>Terrific Airways</h3>
  <p>This project will be about booking flight tickets and purchasing tickets.</p>
  </div>


<div>
  <h3>Room Allocation</h3>
  <p>This project will be about room allocation where student book room online</p>
  </div>


<div>
  <h3>Terrific Hotel</h3>
  <p>This project will be about hotel you can order food, book a room and more.</p>
  </div>





 
  </section>


     <h3  className='projecth3' style={{textAlign:"center"}} >To access more of my projects visit my github-account
     <br />
    <button className='btn To-github-btn'><a href="https://github.com/GodwinTerrific" target="_blank" rel="noopener noreferrer" >TO-my-github </a></button>
     </h3>
   

   </div>
  </section>

    
  )
}
export default Projects;



 


