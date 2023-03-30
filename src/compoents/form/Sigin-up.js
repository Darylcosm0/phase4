import { useState } from "react";
import Login from "./Login";
import Register from "./Register";


function SignUp() {
    const [location, setLocation] = useState('register');


    const toggleForm = (locationUser) => {
        setLocation(locationUser);
    }


    return (  
        <section>
            {location === 'register' ? <Register toggleForm={toggleForm}/> : location === 'login' ? <Login toggleForm={toggleForm}/> : null}
        </section>
    );
}
export default SignUp;
