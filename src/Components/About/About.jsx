import React from 'react'
import './About.css'
import aboutImg from '../../assets/about_img.jpg'


const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
      <div className="about-left">
      <img src={aboutImg} alt="about img" />
        </div>
        <div className="about-right">
        <div className="about-para">
            <p>I'm a front-end developer with a passion for creating intuitive and dynamic user experiences. Proficient in HTML, CSS, and JavaScript, I specialize in building responsive and accessible web applications. I thrive on transforming design concepts into interactive digital solutions.</p>
            <p></p>
             </div>
             <div className="about-skills">
             <div className="about-skill"><p>Javascript</p><hr style={{width:"50%"}} /></div>
             <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
             <div className="about-skill"><p>HTML and CSS</p><hr style={{width:"50%"}} /></div>
             <div className="about-skill"><p>Responsive Web Design</p><hr style={{width:"70%"}} /></div>

             </div>
         </div>
      </div>
      
    </div>
  )
}
    export default About