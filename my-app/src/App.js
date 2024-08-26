import React, { useState } from "react";
import "./App.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    // Basic validation (you can expand this logic)
    if (email === "" || password === "") {
      setErrorMessage("Please fill in all fields");
      return;
    }
    // Logic for sign-in (API call or authentication here)
    console.log("Sign In", { email, password });
    setErrorMessage("");
    // Redirect or handle successful sign-in
  };

  return (
    <div className="signin-container">
      <div className="signin-form-wrapper">
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn} className="signin-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
