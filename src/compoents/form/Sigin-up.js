import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Allergy from "./Allergy";
import Nav from '../navbar/Nav'

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
            info ==='allergy'? <Allergy changeForm={changeForm}/> 
        }
        </section>
    );
}

export default SignUp;