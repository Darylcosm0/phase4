import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Allergy from "./Allergy";

function SignUp() {
    return (  
        <section>
            <Register />
            <Login />
            <Reset />
            <Allergy />
        </section>
    );
}

export default SignUp;