function Login() {
    return (  
      <section>
        <form>
          <h2>Welcome Back</h2>
          <div>
            <label htmlFor='exampleInputEmail1' className='form-label'>Email address</label>
            <input type='email' id='inputEmail1' className='form-control' placeholder='youremail@gmail.com' />
          </div>
          <div>
            <label htmlFor='exampleInputPassword1' className='form-label'>Password</label>
            <input type='password' id='exampleInputPassword1' className='form-control' placeholder='******' />
          </div>
          <button className='btn btn-success'>Login</button>
          <button>Don't have an account, Register Here!</button>
        </form>
      </section>
    );
  }
  
  export default Login;
  