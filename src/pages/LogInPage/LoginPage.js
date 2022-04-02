import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FormInputs from "../../components/FormInputs/FormInputs";
import "./LoginPage.scss";
import LoginHero from "../../assets/images/login-bot.svg";

function Login(props) {
  const userLogin = (e) => {
    e.preventDefault();

    console.log({
      username: e.target.username.value,
      password: e.target.password.value,
    });

    axios
      .post("http://localhost:8080/users/login", {
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then((res) => {
        let token = res.data.token;
        let userId = res.data.userId;
        sessionStorage.setItem("authToken", token);
        sessionStorage.setItem("userId", userId);
        props.history.push("/");
      });
  };

  return (
    <div className="login">
      <div className="login__title-container">
        <h1 className="login__title">Log In</h1>
      </div>
      <div className="login__content-container">
        <img className="login__bot-image" src={LoginHero} />
        <div className="login__form-container">
          <form className="login__form" onSubmit={userLogin}>
            <FormInputs
              placeholder="Type username here"
              label="Username"
              name="username"
              type="text"
            />
            <FormInputs
              placeholder="Type password here"
              label="Password"
              name="password"
              type="password"
            />
            <button className="login__login-button" type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
      <div className="login__signup-container">
        <Link to="/signup">
          <button className="login__signup-button">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
