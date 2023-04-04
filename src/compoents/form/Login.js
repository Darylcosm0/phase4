import React, { useState } from "react";
import { userStore } from "../../data/RecipesStore";
import axios from "axios";
import { useStore } from "zustand"
import Register from "./Register";
import Reset from "./Reset";
import AddAllergy from "./AddAllergy";

function Login() {
  const store = useStore(userStore);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [changed, setChanged] = useState(false);

  const handleNewUser = () => {
    console.log("new user");
    setSubmit(true)
    //register
  }
  if (submit) {
    return <Register />
  }

  const onResetPassword = (e) => {
    e.preventDefault();
    //reset
    console.log("reset password");
    setClicked(true);
  };
  if (clicked) {
    return <Reset />
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("https://phase-4-project-recipes-backend.onrender.com/login", {
      email: email,
      password: password
    }).then(r => {
      store.changeUser(r.data.user);
      //navigation
      console.log("welcome");
      setChanged(true);
    }).catch(error => {
      alert("Error: " + error.message);
      console.log("error")
    });
  }
  if (changed) {
    return <AddAllergy />
  }
  
  return (  
    <section>
      <form onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>
        <div>
          <label htmlFor="inputEmail" className="form-label">
            Email address
          </label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="youremail@gmail.com"
          />
        </div>
        <div>
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="******"
          />
        </div>
        <button className="btn btn-success" type="submit">
          Login
        </button>
        <button className="btn btn-warning" onClick={onResetPassword}>
          Forgot Password
        </button>
        <button className="link-btn" onClick={handleNewUser}>
          Don't have an account? Register here.
        </button>
      </form>
    </section>
  );
}

export default Login;
