import React, {useState} from "react";

function Register(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [confirm, setConfirm] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
    }

    const onLoginClick = (e) => {
        e.preventDefault();
        props.toggleForm('allergy');
        //logic
        console.log(username, email);
    }
    

    return (  
        <section>
            <form onSubmit={handleChange}>
                <h2>Create an account</h2>
                <div>
                    <lable htmlFor="username" className="form-label">Username</lable>
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
                    <button className='btn btn-success' onClick={onLoginClick}>Login</button>
                    <button className="link-btn" onClick={() => props.toggleForm('login')}>Already have an account? Login here.</button>
            </form>

        </section>
    );
}

export default Register;