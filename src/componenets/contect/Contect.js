import React from 'react'
import "./Contect.css"
import { MdCall } from 'react-icons/md';
 import {BsFillChatDotsFill } from "react-icons/bs";
 import {HiChatBubbleBottomCenter } from "react-icons/hi2"


const Contect = () => {
  return (
    <section className='c-wrapper'>
      <div className='padding innerWidth flexCenter c-container'>
        <div className='flexColStart c-left' style={{marginLeft:"200px",marginTop:"50px"}}>
           <span className='orangeText'>Our Contacts</span>
           <span className='primaryText'> Easy to Contact us</span>
           <span className='secondaryText'> We awlays ready to help you by providing the best services <br/> beleive a good place to live your life better </span>
             <div className='flexColStart contactModes'>
                 <div className='flexStart row'>
                     <div className='flexColCenter mode'>
                         <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <MdCall size={25}/>
                            </div>
                             <div className='flexColStart detail'>
                                 <span className='primaryText'>Call</span>
                                 <span  className='secondaryText'>+917507283172</span>
                             </div>                    
                      </div>
                        <div className='flexCenter button'>Call Now</div>
                     </div>

                     <div className='flexColCenter mode'>
                         <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <BsFillChatDotsFill size={25}/>
                            </div>
                             <div className='flexColStart detail'>
                                 <span className='primaryText'>Chat</span>
                                 <span  className='secondaryText'>+917507283172</span>
                             </div>                    
                      </div>
                        <div className='flexCenter button'>Chat Now</div>
                     </div>
                 </div>

                 <div className='flexStart row'>
                     <div className='flexColCenter mode'>
                         <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <BsFillChatDotsFill size={25}/>
                            </div>
                             <div className='flexColStart detail'>
                                 <span className='primaryText'> Vedio Call</span>
                                 <span  className='secondaryText'>+917507283172</span>
                             </div>                    
                      </div>
                        <div className='flexCenter button'> Vedio Call Now</div>
                     </div>

                     <div className='flexColCenter mode'>
                         <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <HiChatBubbleBottomCenter size={25}/>
                            </div>
                             <div className='flexColStart detail'>
                                 <span className='primaryText'>Message</span>
                                 <span  className='secondaryText'>+917507283172</span>
                             </div>                    
                      </div>
                        <div className='flexCenter button'>Message Now</div>
                     </div>
                 </div>
             </div>
        </div>
        <div className='c-right' style={{marginLeft:"10px", marginTop:"80px"}}>
            <div className='image-container' >
                     <img src='./contact.jpg'/>
       </div>
        </div>
      </div>
    </section>
  )
}

export default Contect;