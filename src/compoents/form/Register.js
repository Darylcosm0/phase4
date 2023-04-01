import React, {useState} from "react";

function Register(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        console.log(username);
    }

    return (  
        <section>
            <form onSubmit={handleChange}>
                <h2>Create an account</h2>
                <div>
                    <label htmlFor="username" className="form-lable">Username</label>
                    <input value={username} name="name" onChange={(e) => setUsername(e.target.value)}type="name" id='inputName' className='form-control' placeholder="Username"/>
                </div>
                <div>
                    <label htmlFor='exampleInputEmail1' className='form-label'>Email address</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' id='inputEmail1' className='form-control' placeholder='youremail@gmail.com' />
                </div>
                <div>
                    <label htmlFor='inputPassword' className='form-label'>Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)}type='password' id='inputPassword' className='form-control' placeholder='******' />
                </div>
                    <button className='btn btn-success'>Login</button>
                    <button className="link-btn" onClick={() => props.toggleForm('login')}>Already have an account? Login here.</button>
            </form>

        </section>
    );
}

export default Register;