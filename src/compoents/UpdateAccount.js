import { useState } from "react";
import Login from "../compoents/form/Login"

const Update = () => {

    const [name, setName] = useState('');
    const [newPass, setNewPass] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [ confirmPass, setConfirmPass ] = useState('');

    const handleUpdate = (e) => {
        e.preventDefault();
        setIsLoading(true)
        fetch('https://phase-4-project-recipes-backend.onrender.com/password_resets/validate_token', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(name, newPass)
        }).then(() => {
            console.log('updated name and password successfully')
            setIsLoading(false);
            setSubmitted(true);
        });
    }

    if (submitted) {
        return <Login />;
      }

    return (  
        <section>
            <form>
                <h1>Update your account detailes</h1>
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">User Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Enter User Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">Change Password</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="password" 
                        placeholder="Enter new password"
                        value={newPass}
                        onChange={(e) => setNewPass(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">Confirm Password</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="password" 
                        placeholder="Enter new password"
                        value={confirmPass}
                        onChange={(e) => setConfirmPass(e.target.value)}/>
                </div>
                { !isLoading && <button type="submit" className="btn btn-outline-info" onClick={handleUpdate}>Submit</button> }
                { isLoading && <button type="submit" className="btn btn-outline-info" disabled>Submit......</button> }
            </form>
        </section>
    );
}
 
export default Update;