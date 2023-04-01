function Reset() {

    //logic

    return (  
        <section>
            <h2>Reset Password</h2>
            <label htmlFor='inputEmail' className='form-label'>Email</label>
            <input type='email' className='form-control'></input>
            <label htmlFor='inputPassword' className='form-label'>New Password</label>
            <input type='password' className='form-control'></input>
            <button className='btn btn-primary'>Reset Password</button>
        </section>
    );
}

export default Reset;