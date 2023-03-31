function Reset() {

    //logic

    return (  
        <section>
            <h2>Reset Password</h2>
            <lable htmlFor='inputEmail' className='form-lable'>Email</lable>
            <input type='email' className='form-control'></input>
            <lable htmlFor='inputPassword' className='form-lable'>New Password</lable>
            <input type='password' className='form-control'></input>
            <button className='btn btn-primary'>Reset Password</button>
        </section>
    );
}

export default Reset;