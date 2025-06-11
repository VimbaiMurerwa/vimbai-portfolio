import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profileImg from '../../assets/profile_img.jpg'


const Hero = () => {
  return (
    <div id='home' className="hero">
        
        <img src={profileImg} alt="profile img" />
        <h1><span>Hi,</span> I'm <span> Vimbai Murerwa |</span> frontend developer </h1>
        <p>I am a frontend developer, specializing in crafting responsive designs, I ensure that users across all devices enjoy a consistent and enjoyable experience, adhering to the best practices in web accessibility </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
        <a href="vimbaimurerwa soft.pdf" target="_blank"rel="noopener noreferrer" download>
  <div className="hero-resume">My Resume</div>
</a>
    </div>
    </div>
  )
  }

  export default Hero 