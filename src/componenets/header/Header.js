import React from 'react';
import "./Header.css";
import {BiMenuAltRight} from "react-icons/bi";
import { useState } from 'react';
import OutsideClickHandler from "react-outside-click-handler";

const Header = (props) => {
   const [menuopen,setMenuopen]=useState(false);

  const handleLogout=()=>{
    props.setLogin(false);

  }

   const getmenustyle=(menuopen)=>{
    if(document.documentElement.clientWidth <=800){
      return { right:!menuopen && "-100%"}
    }
   }
  return (
    <div>
      <section className='h-wrapper'>
        <div className='flexCenter padding innerwidth h-container'>
          <img src='./logo2.png' width={100} style={{ marginLeft: "200px" }} />
          <OutsideClickHandler
            onOutsideClick={()=>{
              setMenuopen(false)
            }}
          >
          <div className='flexCenter h-menu'  style={getmenustyle(menuopen)} >
            <a href="">Residencies</a> {/* Example: Navigate to the "residencies" route */}
            <a href="">Our value</a> {/* Example: Navigate to the "ourvalue" route */}
            <a href="">Get Started</a> {/* Example: Navigate to the "getstarted" route */}
          
              <a href="">Contact Us</a> {/* Example: Navigate to the "contact" route */}
            
            <button onClick={handleLogout} className='button' >
              <a href="">Logout</a> {/* Example: Navigate to the "contact" route */}
            </button>
          </div>
          </OutsideClickHandler >
          <div className='menu-icon' onClick={()=>setMenuopen((prev)=>!prev)}>
           <BiMenuAltRight size={30}/>
        </div>
  
        </div>
          </section>
    </div>
  );
}

export default Header;
