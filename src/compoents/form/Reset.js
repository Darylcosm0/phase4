import React, { useState } from "react";
import { useHistory } from 'react-router-dom';


function Reset() {

    const [reset, setReset] = useState('');
    const [email, setEmail] = useState('');

    const history = useHistory();

    const handleReset = async (e) => {
        e.preventDefault();

        try{
          const response = await 
                        fetch('/api/reset-password', {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' 
                        },
                        body: JSON.stringify({ email, password: reset })
                    });
                    if (response.ok) {
                        console.log('Password reset successful');
                        // show success message to the user 
                        history.push('./Login.js');
                    } else {
                        console.log('Password reset failed');
                        // show error message to the user
                    }
                }catch (error) {
                        console.log('Password reset failed', error); 
                        // show error message to the user
                    }
      };
      

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