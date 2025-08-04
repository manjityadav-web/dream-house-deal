import React from 'react'
import NavBar from './NavBar'
import { useLocation } from 'react-router-dom'; 


const About = () => {

    const location = useLocation();
  return (
    <>
     
       {location?.pathname!='/' && <NavBar className ='sticky'/>}
       <div className='main-about'>
      <div className="container mt-5 about-section bg-info" data-aos="fade-up">
        <div className="row align-items-center">
          <div className="col-md-6 content ">
            <h2> 🏠 About Us</h2>
            <p>Welcome to [Your Company Name], your trusted partner in real estate.
              We are a team of experienced professionals committed to helping you buy, sell, or rent properties with ease and confidence.

              With years of industry experience and a deep understanding of the local market, we aim to provide transparent, honest, and efficient services to our clients. Whether you're looking for your dream home, a commercial space, or an investment opportunity, we are here to guide you every step of the way.</p>
            <ul>
              <li>✅ Trusted by hundreds of happy clients</li>
              <li>🏆 Expert knowledge of local real estate trends</li>
              <li>💼 Wide range of residential and commercial properties</li>
            </ul>
            <p>
              At [Your Company Name], we believe in building long-term relationships with our clients based on trust, integrity, and results.

              Let’s turn your property dreams into reality.


            </p>
          </div>
          <div className="col-md-6 image ">
            <img
              src="about.png"
              alt="Our Team"
              className='ms-5'
            />
          </div>
        </div>
      </div>
</div>
    </>
  )
}

export default About
