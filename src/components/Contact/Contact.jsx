import React, { useRef,useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[message,setMessage]=useState('');
   const[done,setDone]=useState(false);
   const form = useRef();

  const sendEmail=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_cpshpto', 'template_60h1uhe', form.current, '_tyZbxBQiPJz0uyVy')
      .then((result) => {
          console.log(result.text);
          setDone(true);
          setName('')
          setEmail('')
          setMessage('')

      }, (error) => {
          console.log(error.text);
      });
  
  }

  return (
 
      <section className="contact-page">
      
      <div className="section-title">
        <h2>Contact-me</h2>
        <div className="underline"></div>
      </div>
        <article className="contact-form">
          <h3>Get in-Touch</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="text"
                name="user_name"
                value={name}
                onChange={(e)=>{
                  setName(e.target.value)
                }}
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                  value={email}
                   onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                name="user_email"
                placeholder="your-email"
                className="form-control-email"
              />
              <textarea
                name="message"
                 value={message}
                   onChange={(e)=>{
                  setMessage(e.target.value)
                }}
                rows="5"
                placeholder="enter-your-message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
            Send
            </button>
         
          </form>
        </article>
          <div className='sent'>{done&&"Message-succesfully-recevied!..."}</div> 
      </section>

  )

}

export default Contact;