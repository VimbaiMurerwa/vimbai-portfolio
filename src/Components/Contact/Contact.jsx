import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.png'
import linkedin_icon from '../../assets/linkedin_icon.png'
import call_icon from '../../assets/call_icon.png'


const Contact = () => {
  const onSubmit = async (event) => { 
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "22c2caa0-622e-4842-98f7-9bdfb7231fe4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className="contact">
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className='contact-section'>
       <div className='contact-left'>
        <h1>Let's talk</h1>
        <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want.</p>
       <div className="contact-details">
        <div className='contact-detail'>
            <img src={mail_icon} alt="" /> <p>vimbiemurerwa@gmail.com</p>
          </div>
          <div className='contact-detail'>
          <img src={linkedin_icon} alt="" /> <a href="https://www.linkedin.com/in/vimbai-murerwa-0b4029171?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">LinkedIn </a>
          </div>
          <div className='contact-detail'>
          <img src={call_icon} alt="" /> <p>+971542715614</p>
          </div>
       </div>
       </div>
       <form  onSubmit={onSubmit} className="contact-right">
        <label htmlFor=''>Your Name</label>
        <input type="text" placeholder="Enter your name" name='name'/>
        <label htmlFor=""> Your email</label>
        <input type="email" placeholder='Enter your email' name='email' />
        <label htmlFor=''>Write your message here</label>
        <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
        <button type='submit' className='contact-submit'>Submit now</button>
       </form>
    </div>
    </div>
    
  )
}
export default Contact