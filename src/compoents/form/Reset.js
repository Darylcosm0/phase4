import React, { useState } from "react";
import Login from "./Login";

function Reset() {
  const [reset, setReset] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [loggedIn, setLoggedIn] = useState(false); // add loggedIn state

  const onLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true); // set the loggedIn state to true when the button is clicked
  };

  const handleReset = async (e) => {
    e.preventDefault();
  
    const response = await fetch('https://phase-4-project-recipes-backend.onrender.com/password_resets/validate_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password: reset }),
    });
  
    if (response.ok) {
      // Password reset successful
      setLoggedIn(true);
    } else {
      // Password reset failed
      const error = await response.json();
      console.error(error.message);
    }
  };
  
  if (loggedIn) {
    // render the Navigation component if the user is logged in
    return <Login />;
  }

  // render the Reset Password form if the user is not logged in
  return (
    <section>
      <form onSubmit={handleReset}>
        <h2>Reset Password</h2>
        <label htmlFor="inputEmail" className="form-lable">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="inputPassword" className="form-lable">
          New Password
        </label>
        <input
          type="password"
          className="form-control"
          value={reset}
          onChange={(e) => setReset(e.target.value)}
        />
        <label htmlFor="inputPassword" className="form-lable">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />
        <button className="btn btn-primary" onClick={onLogin}>
          Reset Password
        </button>
      </form>
    </section>
  );
}

export default Reset;
