import React, { useState } from "react";
import { userStore } from "../../data/RecipesStore";
import axios from "axios";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onResetPassword = (e) => {
    e.preventDefault();
    props.toggleForm("reset");
    console.log("reset password");
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://phase-4-project-recipes-backend.onrender.com/login", {
      email: email,
      password: password
    }).then(r => {
      userStore.changeUser(r.data.user);
      props.toggleForm("navigation");
      console.log("welcome");
    }).catch(error => {
      alert("Error: " + error.message);
    });
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
        <button className="link-btn" onClick={() => props.toggleForm("register")}>
          Don't have an account? Register here.
        </button>
      </form>
    </section>
  );
}

export default Login;
