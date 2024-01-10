import React from 'react';
import {Link} from "react-router-dom";
import About from '../../Pages/About';
import Service from '../Services/Services';
import Projects from '../Projects/Projects';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import './Home.css';
import socialLinks from '../../partials/SocialLinks';
import Ipng from "../../assets/images/I.png";
import { Typewriter } from 'react-simple-typewriter'


const Home = () => {


    return (
      <>
    <div className="hero" >
      <section className="section-center hero-center">
        <article className="hero-info">
        <h1>Welcome </h1>
          <div>
            <div className="underline"></div>
            <h1>i'm Godwin</h1>
            <h3>
             <Typewriter
            words={['A Developer', 'Tech Writer','Freelancer','businessman','Photographer',"and Player"]}
            loop={0}
            cursor
            cursorStyle=','
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          </h3>

            <Link to='/contact' className="btn">
              contact me
            </Link>
            <div className="social-links">
              {socialLinks.map(link => {
                return (
                  <a href={link.url} key={link.id} className="social-link">
                    {link.icon}
                  </a>
                )
              })}
            </div>
          </div>
        </article>

    <img src={Ipng} alt="portfolio" className="hero-img-svg" />
      </section>
    </div>

  <About/>
  <Service/>
  <Projects/>
  <Skills/>
  <Blogs/>
  <Contact/>
 </>
  );
}
 
export default Home;