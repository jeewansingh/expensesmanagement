import logo from "../../src/logo.png";
import "./css/Home.css";
import Button from "./Button";
import { BrowserRouter, Outlet, Link } from "react-router-dom";
import MainFeatures from "./MainFeatures";

const Home = () => {
  return (
    <>
      <div className="Container">
        <a href="/">
          <img src={logo} className="HomeLogo"></img>
        </a>
        <div className="HomeText">
          Effortless finance tracking for a stress-free life.
        </div>
        <div className="Btn">
          <BrowserRouter basename="/">
            <Link to="/login">
              <Button btnName="Login"></Button>
            </Link>
            <Link to="/signup">
              <Button btnName="Signup"></Button>
            </Link>
          </BrowserRouter>
          <Outlet />
        </div>
      </div>

      <MainFeatures />
    </>
  );
};

export default Home;
