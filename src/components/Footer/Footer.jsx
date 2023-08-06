import React from "react"
import './Footer.css';
import socialLinks from "../../partials/SocialLinks"

const Footer = () => {
  return (
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
       Godwin &copy;{new Date().getFullYear()}
          <span></span>
    
        </h4>
    </div>
    </footer>
  )
}

export default Footer
