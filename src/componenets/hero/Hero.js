import React from 'react'
import "./Hero.css"
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
 import {motion} from "framer-motion";

const Hero = () => {
  return (
   <section className='hero-wrapper'>
      <div className='  flexCenter padding innerwidth hero-container'>
        <div className=' flexColStart hero-left'style={{marginLeft:"200px"}}>
          <div className='hero-title'>
            <div className='orangecircle'/>
            <motion.h1
            initial={{y:"2rem", opecity:0}}
                 animate={{y:0, opecity:1}}
                 transition={{
                  duration:4,
                  type:"spring"
                 }}
            >
             
            

              Discover <br/> Most Suitable <br/> Property
              </motion.h1>
          </div>
          <div className='flexColStart hero-des'>
            <span className='secondaryText'>
              Find a variety of property that suit you very easilty  
            </span>
            
            <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
          </div>
            <div className=' flexCenter search-bar'>
              <HiLocationMarker color="var(--blue)"  size={25} />
              <input type='text'/>
              <button className='button'>Search</button>
            </div>

             <div className='flexCenter stats'>
              <div className='flexColCenter  stat'>
                  <span>
                     <CountUp  start={8800} end={9000} duration={4}/>
                     <span>+</span>
                      </span>
                    <span  className='secondaryText'>Premium Product</span>
                      
                 
              </div>
              <div className='flexColCenter stat'>
                  <span>
                     <CountUp  start={19500} end={2000} duration={4}/>
                     <span>+</span>
                     </span>
                    <span className='secondaryText'>  Happy Customer</span>
                    
                 
              </div>
              <div className='flexColCenter stat'>
                  <span>
                     <CountUp   end={28} />
                     <span>+</span>
                     </span>
                    <span className='secondaryText'> Award Winning</span>
                     
              
              </div>
     
     
             </div>
            
        </div>
        <div className=' flexCenter hero-right' style={{marginRight:"150px"}}>
             < motion.div 
               initial={{x:"7rem",opecity:0}}
               animate={{x:0,opecity:1}}
               transition={{
                duration:4,
                type:"spring"
               }}

             className='image-container'>
                 <img src='./hero-image.png' alt='image'/>
             </motion.div>
        </div> 
      </div>
      
   </section>
  )
}

export default Hero