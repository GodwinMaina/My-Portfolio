import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
   const form = useRef()

  const sendEmail=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_cpshpto', 'template_60h1uhe', form.current, '_tyZbxBQiPJz0uyVy')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  
  }

  const[done,setDone]=useState(false)
  return (
 
      <section className="contact-page">
      
      <div class="section-title">
        <h2>Contact-me</h2>
        <div class="underline"></div>
      </div>
        <article className="contact-form">
          <h3>Get in-Touch</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="text"
                name="user_name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="user_email"
                placeholder="your-email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
            Send
            </button>
         
          </form>
        </article>
           {done&&"Your-essage-was-succesfully-receied"}
      </section>

  )

}

export default Contact