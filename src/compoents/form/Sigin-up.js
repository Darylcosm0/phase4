import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Allergy from "./Allergy";
import Reset from "./Reset";
import Navigation from "../navbar/Navigation";


function SignUp() {
    const [location, setLocation] = useState('register');

    const toggleForm = (locationUser) => {
        setLocation(locationUser);
    }

    const handleLoginClick = () => {
        setLocation('navigation');
    }

    return (  
        <section>
            {location === 'register' ? <Register toggleForm={toggleForm} onLoginClick={handleLoginClick}/> : 
             location === 'login' ? <Login toggleForm={toggleForm}/> : 
             location === 'allergy' ? <Allergy /> :
             location === 'reset' ? <Reset /> :
             location === 'navigation' ? <Navigation /> :
             null}
        </section>
    );
}
export default SignUp;
