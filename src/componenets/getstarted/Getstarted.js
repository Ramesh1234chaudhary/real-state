import React from 'react'
import "./Getstarted.css"

const Getstarted = () => {
  return (
    <section className='g-wrapper' style={{marginTop:"50px",width:"1000px", marginLeft:"200px"}}> 
    <div className='padding innerWidth g-container'>
      <div className='flexColCenter  inner-container'>
           <span className='primartText'>Get Started with Homyz</span>
           <span className='secondaryText'>Subscribe and find super aatractive price quotes <br/>
              Find your residence soon</span>
              <button className='button'>
                 <a href='mailto:romanchaudhary01994@gmail.com'></a>Get Started</button>
      </div>
    </div>
    </section>
  )
}

export default Getstarted;