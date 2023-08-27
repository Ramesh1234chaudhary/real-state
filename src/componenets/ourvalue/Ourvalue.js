import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from "react-accessible-accordion" ;
import {MdOutlineArrowDropDown} from "react-icons/md";
import "./Value.css";
import data from "../../utils/accordion";
import  "react-accessible-accordion/dist/fancy-example.css";


const Ourvalue = () => {

    const [className,setClassName]=useState(null)
  return (
    <section className='v-wrapper'>
       <div className='padding innerWidth flexCenter v-container'>
          <div className='v-left'>
           <div className='image-container ' style={{marginLeft:"150px", marginTop:"80px"}}>
           <img src='./value.png' alt=""/>
           </div>
          </div>
          <div className=' flexColStart v-right' style={{marginRight:"100px",marginTop:"50px"}}>
               <span className='orangeText'>Our Value</span>
               <span className='primaryText'>Value We Give to You</span>
               <span className='secondaryText'>
                 We always ready to help by providing the best services for you.
                 <br/>
                  we beleive a good black to live can make your life better
                  
               </span>

               <Accordion allowMultipleExpanded={false} preExpanded={[0]} className='accordion' >
                     {
                          data.map((item,i)=>{
                            
                            return (
                                <AccordionItem className={`accordionitem ${className}`} key={i} uuid={i} >
                                    <AccordionItemHeading> 
                                        <AccordionItemButton className=' flexCenter accordianbutton'>
                                            <AccordionItemState>
                                                {({expanded})=>expanded ? 
                                                setClassName("expanded"):setClassName("collapse")}
                                            </AccordionItemState>
                                            <div className='flexCenter icon'>
                                            {item.icon}
                                            </div>
                                            <span className='primaryText'>{item.heading}</span>
                                             <div className='flexCenter icon'>
                                                 <MdOutlineArrowDropDown size={20}/>
                                             </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
                                        <p className='secondaryText'>{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                          })
                     }
               </Accordion>
          </div>
       </div>
    </section>
  )
}

export default Ourvalue;