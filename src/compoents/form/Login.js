import React, {useState} from "react";
import { useStore } from "zustand";
import { userStore } from "../../data/RecipesStore";
import axios from "axios";


function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   const store = useStore(userStore)
   console.log(email)
   console.log(password)
   const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://phase-4-project-recipes-backend.onrender.com/login",{
        email:email,
        password:password
        }).then(r => store.changeUser(r.data))
    }

    return (  
      <section>
        <form onSubmit={handleSubmit}>
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
  