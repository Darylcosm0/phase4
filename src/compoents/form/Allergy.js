import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Allergy from "./Allergy"; // Import statement for the Allergy component

function SignUp() {

    const [location, setLocation] = useState('register');
    const [info, setInfo] = useState('allergy');

    const toggleForm = (formUser) => {
        setLocation(formUser);
    }

    const changeForm = (userAllergy) => {
        setInfo(userAllergy);
    }

    return (  
        <section>
        {
            location ==='register'? <Register toggleForm={toggleForm}/> : <Login toggleForm={toggleForm}/>
        }
        {
            info === 'allergy'? <Allergy changeForm={changeForm}/> : null // Default value for info state variable
        }
        </section>
    );
}

export default SignUp;
