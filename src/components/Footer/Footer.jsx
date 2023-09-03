import React from "react"
import './Footer.css';
import socialLinks from "../../partials/SocialLinks"
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
          {socialLinks.map(link => {
            return (
              <a href={link.url} key={link.id} className="social-link">
                {link.icon}
              </a>
            )
          })}
        </div>
        <h4>
       &copy;{new Date().getFullYear()} Godwin
          <span></span>
    
        </h4>
    </div>
  
    </footer>
    <a href="/" className="top-link"><FaArrowUp/></a> 

    </>
  )
}

export default Footer
