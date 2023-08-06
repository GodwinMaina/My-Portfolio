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
// import hero from "../../assets/images/hero.svg";
import Ipng from "../../assets/images/I.png";
import { Typewriter } from 'react-simple-typewriter'


const Home = () => {



    return (
      <>
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
        <h1>Welcome</h1>
          <div>
            <div className="underline"></div>
            <h1>i'm Godwin</h1>
            <h3>
             <Typewriter
            words={['A Developer', 'Tech Writer','Freelancer','Photographer',"and Player"]}
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

        {/* <img
          src={hero}
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        /> */}
        <img src={Ipng} alt="portfolio" className="hero-img-svg" />
      </section>
    </header>

  <About/>

<Service/>

 <Projects/>

 <Skills/>

 <Blogs/>

 <Contact/>
 </>

  )
}
 
export default Home;




// previous Home page setup

// ( 

//     <div className="home">

//        <div className="home-left">

//         <div className="home-name"> <span>Hello I'm </span>
//         <span>Godwin</span>
//         <span>Fronted developer with high level of experience in web designing, development & producing Quality work.</span>
//         </div>

//         <button className="home-button button">Hire Me</button>
//      </div>

//      <div className="home-right">

    
     
     
//      </div>

//     </div>
//      )