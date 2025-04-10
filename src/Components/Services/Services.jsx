import React from 'react'
import './Services.css'
import Services_Data from '../../assets/services_data.js'

const Services =() => {
return (
<div id='services' className= "services">
        <div className='services-title'>
            <h1>My Services</h1>
            </div>
            <div className="services-container">
            {Services_Data.map((service,index)=>{
              return <div key={index} className="services-format">
                     <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services-readmore">
                            <p>Read More</p>
                            <i className='ri-arrow-right-line'></i>
                 </div>
                 </div>            
                })}
                </div>
          
            </div> 
            
  )
}
export default Services