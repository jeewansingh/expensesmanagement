import "./css/Login.css";
import React, { useState } from "react";
import "./css/Signup.css";
import Button from "./Button";
import { Outlet, Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isSignnedup, setIsSignnedup] = useState(false);

  console.log(name);
  console.log(username);
  console.log(password);
  console.log(cPassword);
  function handleSubmit(e) {
    e.preventDefault();
    //Name Validation
    if (name.trim() == "") {
      alert("Enter name");
      return false;
    } else if (name.length < 6) {
      alert("Name Should be minimum 6 character.");
      return false;
    }
    // Username Validation
    if (username.trim() == "") {
      alert("Enter username");
      return false;
    }
    //Password Validation

    if (password.trim() == "") {
      alert("Enter Password");
      return false;
    } else if (password.length < 5) {
      alert("Password Should be minimum 6 character.");
      return false;
    }
    if (cPassword.trim() == "") {
      alert("Enter Confirm Password");
      return false;
    } else if (password != cPassword) {
      alert("Please Confirm Passowrd again.");
      return false;
    }
    alert("Signup Complete");
    setIsSignnedup(true);
  }
  return (
    <>
      <div className="loginContainer">
        <div className="loginText">
          <div className="heading">Heading</div>
          <div className="subHeading">Sub Heading</div>
          <Button btnName="Read More" />
        </div>
        <div className="login">
          <form
            method=""
            action=""
            className="loginForm"
            onSubmit={handleSubmit}
            name="signup"
          >
            <div className="formMainHeading">Hello!</div>
            <div className="formSubHeading">Sign up to get started</div>
            <div>
              <label>Full Name</label>
              <input
                type="text"
                placeholder=""
                autoComplete="off"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label>Username</label>
              <input
                type="text"
                placeholder=""
                autoComplete="off"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder=""
                autocomplete="off"
                name="passowrd"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <label>Confirm Passowrd</label>
              <input
                type="password"
                placeholder=""
                autoComplete="off"
                name="cpassword"
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              ></input>
            </div>
            <button type="submit" className="loginButton">
              Sign up
            </button>
            <div className="noAccount">
              Already have an account? &nbsp;{" "}
              <Link to="/login">
                <span>Log in</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Signup;
