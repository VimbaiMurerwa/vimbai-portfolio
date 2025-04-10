import React from 'react'
import './Footer.css'



const Footer = () => {
  
  return (
    <div className='footer'>
     <div className='footer-top'>
     <div className='footer-email-input'>
        <input type='email' placeholder='Enter your email'/>
        </div>
        <div className="footer-subscribe">Subscribe</div>
     
     </div>
      <hr />

      <div className='footer-bottom'>
        <p className="footer-bottom-left">&copy; {new Date().getFullYear()} Vimbai Murerwa. All rights reserved </p>
        <div className='footer-bottom-right'>
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
    </div>
    </div>
    </div>
  )
}
export default Footer