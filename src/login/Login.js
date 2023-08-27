import React, { useState } from 'react';
import "./Login.css";

const Login = (props) => {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState({ email: "", password: "" }); // Initialize error state with an empty object

   const handleLogin = () => {
      const validationerror = {};

      if (!email.trim()) {
         validationerror.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(email)) { // Correct email validation
         setTimeout(() => {
         const interval=  validationerror.email = "Email is not valid";
         clearTimeout(interval)
         },1000);
        
      }

      if (!password.trim()) {
         validationerror.password = "Password is required";
      } else if (password.length < 6) {
        setTimeout(() => {
         const interval=  validationerror.password = "Password should be at least 6 characters";
         clearTimeout(interval)
        },1000);  
           
      }

      setError(validationerror);

      if (Object.keys(validationerror).length === 0) { // Corrected condition
        
         props.setLogin(true);
      }
   }

   return (
      <div className='main'>
         <div className='main2'>
            <div className='circles'>
               <div className='circle1'></div>
               <div className='circle2'></div>
            </div>
            <div className='login-form'>
               <h1>Welcome back!</h1>
               <p>Login to your account.</p>
               <input type='email' placeholder='Email address'
                  value={email} onChange={(e) => setEmail(e.target.value)} />
               {error.email && <span>{error.email}</span>}

               <input type='password' placeholder='Password' value={password}
                  onChange={(e) => setPassword(e.target.value)} />
               {error.password && <span>{error.password}</span>}
               <button className='button' onClick={handleLogin}>Login</button>
            </div>
         </div>
      </div>
   )
}

export default Login;

