import React, { useState } from "react";
import Login from "./Login";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [created, setCreated] = useState(false);
  const [clicked, setClicked] = useState(false);

  
  const handleChange = () => {
    setClicked(true);
  };
  

  const handleCreate = () => {
    setCreated(true);
  };
  if (created) {
    return <Login />
  }

  const onRegisterClick = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (password !== password_confirmation) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }


    // Make the fetch post request
    fetch("https://phase-4-project-recipes-backend.onrender.com/signup", {
      method: "GET", 
      })
      .then((response) => {
        setIsLoading(false);
        if (response.ok) {
          // Handle successful response here
          console.log("Registration successful");

          console.log(username, email);
        } else {
          // Handle error response here
          setError(
            "An error occurred while registering. Please try again later."
          );
          console.log("Fetch error:", response.status);
        }
      })
      .catch((error) => {
        // Handle fetch error here
        setIsLoading(false);
        setError(
          "An error occurred while registering. Please try again later."
        );
        console.log("Fetch error:", error);
      });
  };
  
  
  return (  
    <section>
      <form onSubmit={onRegisterClick}>
        <h2>Create an account</h2>
        <div>
          <label htmlFor="username" className="form-label">Username</label>
          <input 
            required
            value={username} name="name" onChange={(e) => setUsername(e.target.value)}
            type="text" 
            id="inputName" 
            className="form-control" 
            placeholder="Username"/>
        </div>
        <div>
          <label htmlFor="inputEmail1" className="form-label">Email address</label>
          <input 
            required
            value={email} onChange={(e) => setEmail(e.target.value)} 
            type="email" 
            id="inputEmail1" 
            className="form-control" 
            placeholder="youremail@gmail.com" />
        </div>
        <div>
          <label htmlFor="inputPassword" className="form-label">Password</label>
          <input 
            required    
            value={password} onChange={(e) => setPassword(e.target.value)}
            type="password" 
            id="inputPassword" 
            className="form-control" 
            placeholder="******" />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            required
            value={password_confirmation} onChange={(e) => setPassword_confirmation(e.target.value)}
            type="password"
            id="confirmPassword"
            className="form-control"
            placeholder="******" />
        </div>

        {error && <div className="alert alert-danger">{error}</div>}
        { !isLoading && <button className="btn btn-success" onClick={handleCreate}>Sign Up</button>}
        { isLoading && <button className="btn btn-success" disabled>Signing up...</button>}
        <button className="link-btn" type="submit" onClick={handleChange}>Already have an account? Login here.</button>
      </form>
    </section>
  );
}

export default Register;
