import React from 'react';
import './Blog.css';
import hero from "../../assets/images/3.jpeg";
import jpeg1 from "../../assets/images/1.jpeg";
import jpeg2 from "../../assets/images/2.jpeg";
import jpeg4 from "../../assets/images/4.jpeg";


const Blogs = () => {
  return (
     
    <section class="section blog">
   
      <div class="section-title">
        <h2>blogs</h2>
        <div class="underline"></div>
      </div>
   
      <div class="section-center blog-center">
        
        <div class="card">
         
          <div class="card-side card-front">
            <img src={hero} alt="" />
            <div class="card-info">
              <h4>CSS-GRID-TRICKS</h4>
              <p>
               CSS-GRID-IS-A-POWERFUL-TOOL-THAT-IS-USED-TO-STYLE-OUR-APPLICATION-NICELY.
              </p>
              <div class="card-footer">
                <img src={hero} alt="author" />
                <p>7 min read</p>
              </div>
            </div>
          </div>
        
          <div class="card-side card-back">
            <button class="btn">read more</button>
          </div>
        </div>
     
        <div class="card">
         
          <div class="card-side card-front">
            <img src={jpeg1} alt="hello" />
            <div class="card-info">
              <h4>WHY-YOU-SHOULD-USE-CONTEXT-API</h4>
              <p>
              Context-API-is-a-powerfull-tool-for-props.
              Here-is-why-you-should-use-context-API
              </p>
              <div class="card-footer">
                <img src={jpeg1} alt="author" />
                <p>7 min read</p>
              </div>
            </div>
          </div>
    
          <div class="card-side card-back">
            <button class="btn">read more</button>
          </div>
        </div>
      
        <div class="card">
       
          <div class="card-side card-front">
            <img src={jpeg2} alt="" />
            <div class="card-info">
              <h4>Tailwind-Css-DO-less-in-writing-stlyes</h4>
              <p>
               An-article-about-this-is-on-finalization.
              </p>
              <div class="card-footer">
                <img src={jpeg2} alt="author" />
                <p>7 min read</p>
              </div>
            </div>
          </div>
     
          <div class="card-side card-back">
          <a href='https://twitter.com' >
           <button class="btn">read more</button>
          </a>
           
          </div>
        </div>
       
        <div class="card">
        
          <div class="card-side card-front">
            <img src={jpeg4} alt="" />
            <div class="card-info">
              <h4>Working-with-external-API'S</h4>
              <p>
                In-this-Article-we-will-check-how-we-can-use-external-API'S-in-our-projects.
                We-can-use-API's-In-any-ways.
              </p>
              <div class="card-footer">
                <img src={jpeg4} alt="author " />
                <p>7 min read</p>
              </div>
            </div>
          </div>
        
          <div class="card-side card-back">
            <button class="btn">read more</button>
          </div>

        </div>
        
      </div>
    </section>
   
  )
}

export default Blogs