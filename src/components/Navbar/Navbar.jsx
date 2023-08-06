import React, { useContext } from 'react';
import {Link  } from "react-router-dom";
import './Navbar.css';
import  Links from '../../partials/Links';
import {FaBars } from "react-icons/fa";
// import logopng from "../../assets/images/logo.png";
import G from "../../assets/images/G.png";
import  {AppContext}  from  '../../Context.js'
import Sidebar from '../Sidebar/Sidebar';


const Navbar = ()=> {

const {toggleSidebar}=useContext(AppContext);
  return (
 <nav className='navbar'>
 <div  className='nav-center'>
  <div className='nav-header'>
  <Link to='/' >
  <img src={G} alt='Godwin' style={{width:'65px',height:'70px'}}/></Link>
   <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaBars />
            <Sidebar/>
          </button>
        </div>

        <div className='nav-links'>
        {Links.map((link)=>{
    const {id,url,text,icon} = link;
    return (
    <Link key={id} to={url}>
    {icon}
    {text}
    </Link>
    )
  })}

  </div>
 </div>
 </nav> 

  )
}


export default Navbar;












// pre-nabar


//  <div className='nav'>

//    <div className='nav-left'>
//     <div className='nav-name'>Godwin <span className='mainastyle'>Maina</span></div>
//     {/* <span>Toggle button</span> */}
//   </div>

// <div className='nav-right'>

// {/* NAVBAR LINKS */}
// <div className='nav-list'>
// <ul style={{listStyleType:"none"}}>

//   {Links.map((link)=>{
//     const {id,url,text} = link;
//     return (
//     <article key={id}>
//     <a href={url}>{text}</a>

//     </article>
//     )
//   })}
// </ul>
// </div>
// </div>

// {/* <button className='button nav-button'>Contact</button> */}

// </div>

//   )