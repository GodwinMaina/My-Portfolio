import React from 'react';
import './Blog.css';
import hero from "../../assets/images/3.jpeg";
import jpeg1 from "../../assets/images/1.jpeg";
import jpeg2 from "../../assets/images/2.jpeg";
import jpeg4 from "../../assets/images/4.jpeg";
import jpeg5 from "../../assets/images/G.png";


const Blogs = () => {
  return (
     
    <section className="section blog">
      <div className="section-title">
        <h2>my blogs</h2>
        <div className="underline"></div>
      </div>
   

      <div className="section-center blog-center">
        <div className="card">
          <div className="card-side card-front">
            <img src={hero} alt="" className='styleImages'/>
            <div className="card-info">
              <h4>CSS-GRID-TRICKS</h4>
              <p>
               CSS-GRID-IS-A-POWERFUL-TOOL-THAT-IS-USED-TO-STYLE-OUR-APPLICATION-NICELY.
              </p>
              <div className="card-footer">
                <img src={hero} alt="author" />
                <p>7 min read</p>
              </div>
            </div>
          </div>
          <div className="card-side card-back">
            <button className="btn">read more</button>
          </div>
        </div>
     
        <div className="card">     
          <div className="card-side card-front">
            <img src={jpeg1} alt="hello" className='styleImages'/>
            <div className="card-info">
              <h4>WHY-YOU-SHOULD-USE-CONTEXT-API</h4>
              <p>
              Context-API-is-a-powerfull-tool-for-props.
              Here-is-why-you-should-use-context-API
              </p>
              <div className="card-footer">
                <img src={jpeg1} alt="author" />
                <p>7 min read</p>
              </div>
            </div>
          </div>
          <div className="card-side card-back">
            <button className="btn">read more</button>
          </div>
        </div>


        <div className="card">
          <div className="card-side card-front">
            <img src={jpeg2} alt="" className='styleImages'/>
            <div className="card-info">
              <h4>Dockerizing React Application</h4>
              <p>
              How to use Docker to dockerize react applications
              </p>
              <div className="card-footer">
                <img src={jpeg2} alt="author" />
                <p>7 min read</p>
              </div>
            </div>
          </div>
          <div className="card-side card-back">
          <a href='https://twitter.com' >
           <button className="btn">read more</button>
          </a>
          </div>
        </div>
       
      
        <div className="card">
          <div className="card-side card-front">
            <img src={jpeg2} alt="" className='styleImages'/>
            <div className="card-info">
              <h4>Tailwind-Css-DO-less-in-writing-stlyes</h4>
              <p>
               An-article-about-this-is-on-finalization.
              </p>
              <div className="card-footer">
                <img src={jpeg2} alt="author" />
                <p>7 min read</p>
              </div>
            </div>
          </div>
          <div className="card-side card-back">
          <a href='https://twitter.com' >
           <button className="btn">read more</button>
          </a>
          </div>
        </div>
       


        <div className="card">
          <div className="card-side card-front">
            <img src={jpeg4} alt="" className='styleImages'/>
            <div className="card-info">
              <h4>Working-with-external-API'S</h4>
              <p>
                In-this-Article-we-will-check-how-we-can-use-external-API'S-in-our-projects.
                We-can-use-API's-In-any-ways.
              </p>
              <div className="card-footer">
                <img src={jpeg4} alt="author " />
                <p>10 min read</p>
              </div>
            </div>
          </div>
          <div className="card-side card-back">
            <button className="btn">read more</button>
          </div>
        </div>

        <div className="card">
          <div className="card-side card-front">
            <img src={jpeg5} alt="" className='styleImages'/>
            <div className="card-info">
              <h4>React-UseEffect</h4>
              <p>
               An-article-about-this-is-on-finalization.
              </p>
              <div className="card-footer">
                <img src={jpeg5} alt="author" />
                <p>5 min read</p>
              </div>
            </div>
          </div>
          <div className="card-side card-back">
          <a href='https://twitter.com' >
           <button className="btn">read more</button>
          </a>
          </div>
        </div>

      </div>

    </section>
   
  )
}

export default Blogs