import "./login.scss";
import Netflix_Logo from "../../images/Netflix_Logo.png";

function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={Netflix_Logo} alt="logo" />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="email address or phone number" />
          <input type="password" placeholder="password" />
          <button className="loginButton">Sign In</button>
          <span>
            New to Netflix? <b>Sign Up</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure that you are
            not a bot.
            <b>Learn More.</b>
          </small>
        </form>
      </div>
    </div>
  );
}

export default Login;
