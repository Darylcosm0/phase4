import React, { useState } from "react";
import Login from "./Login";

function Reset() {
  const [reset, setReset] = useState("");
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false); // add loggedIn state

  const onLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true); // set the loggedIn state to true when the button is clicked
  };

  const handleReset = async (e) => {
    e.preventDefault();
    // code for resetting the password
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
        <button className="btn btn-primary" onClick={onLogin}>
          Reset Password
        </button>
      </form>
    </section>
  );
}

export default Reset;
