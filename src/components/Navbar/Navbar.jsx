import React, { useContext } from 'react';
import {Link  } from "react-router-dom";
import './Navbar.css';
import  Links from '../../partials/Links';
import {FaBars } from "react-icons/fa";
import G from "../../assets/images/G.png";
import  {AppContext}  from  '../../Context.js';
import Sidebar from '../Sidebar/Sidebar';


const Navbar = ()=> {
const {toggleSidebar}=useContext(AppContext);
  return (
 <nav className='navbar'>
 <div  className='nav-center'>
  <div className='nav-header'>
  <Link to='/' >
  <img src={G} alt='Godwin' style={{width:'65px',height:'70px'}}/>
  </Link>
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
    {icon}{text}
    </Link>
    )
  })}

  </div>
 </div>
 </nav> 
  );
}

export default Navbar;












