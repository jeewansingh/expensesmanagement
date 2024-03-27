import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/loginadmin.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const url = "http://localhost/test/admin/login.php";
    let fData = new FormData();
    fData.append("username", username);
    fData.append("password", password);

    axios
      .post(url, fData)
      .then((response) => {
        toast.success(response.data.detail);
        const token = response?.data?.token;
        localStorage.setItem("token", token);
        navigate("/admindashboard");
      })

      .catch((error) => {
        const data = error.response.data;
        const keys = Object.keys(data);
        keys.forEach((key) => {
          toast.error(data[key]);
        });
      });
  }

  return (
    <>
      {/* <div className="login">
        <h2>Admin Login</h2>
        <form method="" action="" className="loginForm" onSubmit={handleSubmit}>
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
        </form>
      </div> */}
      <div className="body">
        <div className="maincontainer">
          <h2>Admin Login</h2>
          <form action="" method="" onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="username">Username:</label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                autoComplete="off"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Passowrd"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input type="submit" value="Login" />
            <ToastContainer theme="dark" />
          </form>
        </div>
      </div>
    </>
  );
}
export default LoginAdmin;
