import React, { useState } from 'react'
import Header from './componenets/header/Header'
import Hero from './componenets/hero/Hero'
import "./App.css"
import Compnies from './componenets/compnies/Compnies';
import Residencies from './componenets/Residencies/Residencies';
import Ourvalue from './componenets/ourvalue/Ourvalue';
import Contect from './componenets/contect/Contect';
import Getstarted from './componenets/getstarted/Getstarted';
import Footer from './componenets/footer/Footer';
import Login from './login/Login';
const App = () => {
  const [logdin,setIslogdin]=useState(true);
  
    const setLogin=(status)=>{
      setIslogdin(status)
    }
      
  return (
    
    <div className='App'>
     {  logdin ? <div>

        <div> 

        <div className='white-gadient'/>
      <Header  setLogin={setLogin} />
      
        <Hero />
      
      
      
      </div>
      <Compnies/>
       <Residencies/>
       < Ourvalue/>
        <Contect/>
      < Getstarted/>
      <Footer/>  </div>:<Login setLogin={setLogin}/>
     }
      </div>
  
  )
}

export default App