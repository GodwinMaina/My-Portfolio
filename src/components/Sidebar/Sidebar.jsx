import React, { useContext } from 'react';
import  './Sidebar.css';
// import '../../App.css';
import { FaTimes } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import socialLinks from '../../partials/SocialLinks';
import  Links from '../../partials/Links';
import  {AppContext}  from  '../../Context.js';


const Sidebar = () => { 

const {sidebarOpen,toggleSidebar}=useContext(AppContext);

  return (
    <aside className={sidebarOpen ? ' sidebar show-sidebar': "sidebar"}>
      <button className="close-btn" type="button" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className="sidebar-links" >
          {Links.map(link => {
            return (
              <li key={link.id}>
                <Link to={link.url} >
                  {link.text}
                </Link>
              </li>
            )
          })}
        </ul>
        <ul className={`social-links sidebar-icons`}>
          {socialLinks.map(link => {
            return (
              <li key={link.id}>
                <a href={link.url} className="social-link">
                  {link.icon}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar;