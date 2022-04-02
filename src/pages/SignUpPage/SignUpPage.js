import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FormInputs from "../../components/FormInputs/FormInputs";
import signupHero from "../../assets/images/signup-bot.svg"
import "./SignUpPage.scss";

function SignUp(props) {
  const userSignUp = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/users/register", {
        name: e.target.name.value,
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then((res) => {
        props.history.push("/login");
      });
  };

  return (
    <div className="signup">
    <div className="signup__title-container">
      <h1 className="signup__title">Sign-Up</h1>
    </div>
    <div className="signup__content-container">
      <img className="signup__bot-image" src={signupHero} />
      <div className="signup__form-container">
        <form className="signup__form" onSubmit={userSignUp}>
        <FormInputs
            placeholder="Type name here"
            label="Name"
            name="name"
            type="Text"
          />
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
          <button className="signup__signup-button" type="submit">
            Sign-Up
          </button>
        </form>
      </div>
    </div>
    <div className="signup__login-container">
      <Link to="/login">
        <button className="signup__login-button">Log-In</button>
      </Link>
    </div>
  </div>
);
}
export default SignUp;
