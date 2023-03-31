import React, { useState } from "react";

function Reset() {

    const [reset, setReset] = useState('');
    const [email, setEmail] = useState('');

    const handleReset = (e) => {
        e.preventDefault();
        //logic
        console.log(reset);
    }

    return (  
        <section>
            <form onSubmit={handleReset}>
                <h2>Reset Password</h2>
                    <lable htmlFor='inputEmail' className='form-lable'>Email</lable>
                        <input 
                            type='email' 
                            className='form-control'
                            value={email} onChange={(e) => setEmail(e.target.value)}>
                        </input>
                    <lable htmlFor='inputPassword' className='form-lable'>New Password</lable>
                        <input 
                            type='password' 
                            className='form-control'
                            value={reset} onChange={(e) => setReset(e.target.value)}>
                        </input>
                    <button className='btn btn-primary'>Reset Password</button>
            </form>
        </section>
    );
}
export default Reset;