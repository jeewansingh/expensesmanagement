import "./css/Login.css";
import React, { useState } from "react";
import Button from "./Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(username);
    console.log(password);

    const url = "http://localhost/test/login.php";
    let fData = new FormData();
    fData.append("username", username);
    fData.append("password", password);

    axios
      .post(url, fData)
      .then((response) => {
        toast.success(response.data.detail);
        const token = response?.data?.token;
        localStorage.setItem("token", token);
        localStorage.setItem("username", response.data.username);
        navigate("/dashboard");
        window.location.reload();
        return response.data;
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
          <div className="heading">Great to see you again!</div>
          <div className="subHeading">
            Login for a Journey of Smart Incomes and Expenses Management!
          </div>
          <Button btnName="Go Home" onClick={goHome}></Button>
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
            <ToastContainer theme="dark" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
