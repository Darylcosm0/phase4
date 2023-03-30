import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
function SignUp() {
    const [location, setLocation] = useState('register');
    const toggleForm = (formUser) => {
        setLocation(formUser);
    }
    return (
        <section>
        {
            location ==='register'? <Register toggleForm={toggleForm}/> : <Login toggleForm={toggleForm}/>
        }
        </section>
    );
}
export default SignUp;