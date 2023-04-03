import React, { useState } from "react";

function Register(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
  }

  const onLoginClick = (e) => {
    e.preventDefault();
    // Make the fetch post request
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
        username: username
      })
    })
    .then(response => {
      if (response.ok) {
        // Handle successful response here
        console.log('Login successful');
        props.toggleForm('allergy');
        console.log(username, email);
      } else {
        // Handle error response here
        setError('Login failed. Please check your credentials and try again.');
      }
    })
    .catch(error => {
      // Handle fetch error here
      setError('An error occurred while logging in. Please try again later.');
      console.log('Fetch error:', error);
    });
  }

  return (  
    <section>
      <form onSubmit={handleChange}>
        <h2>Create an account</h2>
        <div>
          <label htmlFor="username" className="form-label">Username</label>
          <input 
            required
            value={username} name="name" onChange={(e) => setUsername(e.target.value)}
            type="name" 
            id='inputName' 
            className='form-control' 
            placeholder="Username"/>
        </div>
        <div>
          <label htmlFor='exampleInputEmail1' className='form-label'>Email address</label>
          <input 
            required
            value={email} onChange={(e) => setEmail(e.target.value)} 
            type='email' id='inputEmail1' 
            className='form-control' 
            placeholder='youremail@gmail.com' />
        </div>
        <div>
          <label htmlFor='inputPassword' className='form-label'>Password</label>
          <input 
            required    
            value={password} onChange={(e) => setPassword(e.target.value)}
            type='password' 
            id='inputPassword' 
            className='form-control' 
            placeholder='******' />
        </div>
        <div>
          <label htmlFor='inputPassword' className='form-lable'>Confirm Password</label>
          <input
            required
            value={confirm} onChange={(e) => setConfirm(e.target.value)}
            type='password'
            id='confirmPassword'
            className='form-control'
            placeholder='******' />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button className='btn btn-success' onClick={onLoginClick}>Login</button>
        <button className="link-btn" onClick={() => props.toggleForm('login')}>Already have an account? Login here.</button>
      </form>
    </section>
  );
}

export default Register;
