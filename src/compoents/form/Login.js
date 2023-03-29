import React, {useState} from "react";


function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   const handleClick = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (  
      <section>
        <form onSubmit={handleClick}>
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
  