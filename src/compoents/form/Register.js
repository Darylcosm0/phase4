function Register() {
    return (  
        <section>
            <form>
                <h2>Create an account</h2>
                <div>
                    <lable htmlFor="username" className="form-lable">Username</lable>
                    <input type="name" id='inputName' className='form-control' placeholder="Username"/>
                </div>
                <div>
                    <label htmlFor='exampleInputEmail1' className='form-label'>Email address</label>
                    <input type='email' id='inputEmail1' className='form-control' placeholder='youremail@gmail.com' />
                </div>
                <div>
                    <label htmlFor='exampleInputPassword1' className='form-label'>Password</label>
                    <input type='password' id='exampleInputPassword1' className='form-control' placeholder='******' />
                </div>
          <button className='btn btn-success'>Login</button>
          <button>Have an account, Login Here!</button>
            </form>
        </section>
    );
}

export default Register;