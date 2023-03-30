import React, {useState} from "react";
import './App.css';


function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   const handleChange = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (  import React, { useState } from "react";
    import "./Login.css"; // import your CSS file
    
    function Login(props) {
      // your component code here
    }
    
    export default Login;
    
      <section>
        <form onSubmit={handleChange}>
          <h2>Welcome Back</h2>
          <div>
            <label htmlFor='inputEmail' className='form-label'>Email address</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type='email' id='inputEmail' className='form-control' placeholder='youremail@gmail.com' />
          </div>
          <div>
            <label htmlFor='inputPassword' className='form-label'>Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' id='inputPassword' className='form-control' placeholder='******' />
          </div>
          <button className='btn btn-success'>Login</button>
          <button className='btn btn-warning'>Forgor Password</button>
          <button className="link-btn" onClick={() => props.toggleForm('register')}>Don't have an account? Register here.</button>
        </form>
      </section>
    );
  }
  
  export default Login;
  