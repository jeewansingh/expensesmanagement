import logo from "../../src/logo.png";
import "./css/Home.css";
import Button from "./Button";
import { BrowserRouter, Outlet, Link } from "react-router-dom";
import MainFeatures from "./MainFeatures";
import { useNavigate } from "react-router-dom";
import Subscribe from "./Subscribe";

const Home = () => {
  const navigate = useNavigate();
  function handleLogin() {
    navigate("/login");
  }
  function handleSignup() {
    navigate("/signup");
  }
  return (
    <>
      <div className="Container">
        <img src={logo} className="HomeLogo"></img>
        <div className="HomeText">
          Effortless finance tracking for a stress-free life.
        </div>
        <div className="Btn">
          <Button btnName="Login" onClick={handleLogin}></Button>

          <Button btnName="Signup" onClick={handleSignup}></Button>

          <Outlet />
        </div>
      </div>
      <MainFeatures />
      <Subscribe />
    </>
  );
};

export default Home;
