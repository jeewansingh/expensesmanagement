import "./css/Login.css";
import Button from "./Button";
const Login = () => {
  return (
    <div className="formContainer">
      <form className="form" action="" method="">
        <div className="formHead">
          <div className="formHeading">Sign in</div>
          <div className="formDesc">
            Sign in with your username and password
          </div>
        </div>
        <div className="formLabel">
          <label for="username">Username</label>
          <input type="text" placeholder="username"></input>
          <label for="username">Password</label>
          <input type="password" placeholder="passowrd"></input>{" "}
        </div>
        <Button btnName="Sign in" />
        <div className="notAccount">
          Not have an Account? &nbsp;
          <a href="" className="link">
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
