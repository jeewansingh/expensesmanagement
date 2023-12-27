import "./css/Login.css";
import React, { useState } from "react";
import Button from "./Button";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (username == "username" && password == "pass") {
      alert("Logged in");
    } else alert("Invalid Username or Password!");
  }
  console.log(username);
  console.log(password);
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
          >
            <div className="formMainHeading">Hello Again!</div>
            <div className="formSubHeading">Weclome Back</div>
            <div>
              <label>Username</label>
              <input
                type="text"
                placeholder="Username"
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
                placeholder="Passowrd"
                autoComplete="off"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <button type="submit" className="loginButton">
              Log in
            </button>
            <div className="noAccount">
              Don't have an account! &nbsp;{" "}
              <Link to="/signup">
                <span>Sign up</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
