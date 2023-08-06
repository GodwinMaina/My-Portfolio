import React from "react"
import services from "../../partials/Services";


const Service = () => {
  return (
    <section className="section bg-grey">

    <h2 className="service-section-title">
  my  Services/what-i-do</h2>
    
     <div className="section-underline"></div>
    

      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, text } = service
          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Service;
