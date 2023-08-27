import React from 'react'
import "./Footer.css"


const Footer = () => {
  return (
    <section className='f-wrapper'>
    <div className='padding innerWidth flexCenter f-container'>
       <div className='flexColStart f-left'>
         <img src='./logo2.png' about='alt="' width={120}/>
         <span className='secondaryText'>
             Our vision is to make all people <br/>
              th best place to live for them.
         </span>
       </div>
       <div className='flexColStart f-right'>
            <span className= "PrimaryText">Information</span>
            <span className='secondaryText'>145 New yourk, Fl 4572, USA</span>
            <div className='flexCenter f-menu'>
              <span>Property</span>
              <span>Services</span>
              <span>Product</span>
              <span>About Us</span>
            </div>
       </div>
    </div>
    </section>
  )
}

export default Footer
