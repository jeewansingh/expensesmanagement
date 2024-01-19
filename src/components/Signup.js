import "./css/Login.css";
import React, { useState, useEffect } from "react";
import "./css/Signup.css";
import Button from "./Button";
import { Outlet, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isSignnedup, setIsSignnedup] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
    console.log(username);
    console.log(password);
    console.log(cPassword);
    //Name Validation
    if (name.trim() == "") {
      toast.error("Enter Name");
      return false;
    } else if (name.length < 6) {
      toast.error("Name Should be minimum 6 character.");
      return false;
    }
    // Username Validation
    if (username.trim() == "") {
      toast.error("Enter username");
      return false;
    }
    //Password Validation

    if (password.trim() == "") {
      toast.error("Enter Password");
      return false;
    } else if (password.length < 5) {
      toast.error("Password Should be minimum 6 character.");
      return false;
    }
    if (cPassword.trim() == "") {
      toast.error("Enter Confirm Password");
      return false;
    } else if (password != cPassword) {
      toast.error("Please Confirm Passowrd again.");
      return false;
    }
    setIsSignnedup(true);

    setTimeout(() => {
      navigate("/login");
    }, 1000);

    const url = "http://localhost/test/signup.php";
    let fData = new FormData();
    fData.append("name", name);
    fData.append("username", username);
    fData.append("password", password);
    axios
      .post(url, fData)
      .then((response) => {
        toast.success(response.data);
      })
      .catch((error) => toast.error(error));
    // setCPassword("");
    // setName("");
    // setPassword("");
    // setUsername("");
  }

  function lookup(event) {
    let username = event.target.value;
    let url = `http://localhost/test/lookup.php?username=${username}`;
    axios
      .get(url)
      .then((response) => {
        toast.success(response.data.detail);
        return response.data;
      })
      .then((data) => {
        console.log(data.detail);
      })
      .catch((error) => {
        toast.error(error.response.data.detail);
      });
  }
  const navigate = useNavigate();
  function goHome() {
    navigate("/");
  }

  return (
    <>
      <div className="loginContainer">
        <div className="loginText">
          <div className="heading">Your Journey Begins Here!</div>
          <div className="subHeading">
            Sign Up with us for Effortless Financial Control.
          </div>

          <Button btnName="Go Home" onClick={goHome}></Button>
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
                placeholder="Full Name"
                autoComplete="off"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label>Username</label>
              <input
                onBlur={lookup}
                type="text"
                placeholder="username"
                autoComplete="off"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <span id="help_text_username"></span>
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
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
                placeholder="Re-enter Password"
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
      <ToastContainer theme="dark" />
    </>
  );
};
export default Signup;
