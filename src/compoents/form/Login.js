import React, { useState } from "react";
import { useStore } from "zustand";
import { userStore } from "../../data/RecipesStore";
import axios from "axios";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const store = useStore(userStore)
  const onLogin = (e) => {
    e.preventDefault();
    props.toggleForm("navigation");
    console.log("welcome");
  };

  const onResetPassword = (e) => {
    e.preventDefault();
    props.toggleForm("reset");
    console.log("reset password");
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://phase-4-project-recipes-backend.onrender.com/login",{
    email:email,
    password:password
    }).then(r => store.changeUser(r.data.user))
}

//   return (
//     <section>
//       <form onSubmit={onLogin}>



// function Login(props) {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//    
 
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
