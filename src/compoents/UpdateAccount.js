import { useHistory } from "react-router-dom";
import { useState } from "react";

const Update = () => {

    const [name, setName] = useState('');
    const [newPass, setNewPass] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const handleUpdate = (e) => {
        e.preventDefault();
        setIsLoading(true)
        fetch('http://localhost:8000/recipes', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(name, newPass)
        }).then(() => {
            console.log('updated name and password successfully')
            setIsLoading(false);
            history.push('/login');
        });
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
                { !isLoading && <button type="submit" className="btn btn-outline-info" onClick={handleUpdate}>Submit</button> }
                { isLoading && <button type="submit" className="btn btn-outline-info" disabled>Submit......</button> }
            </form>
        </section>
    );
}
 
export default Update;