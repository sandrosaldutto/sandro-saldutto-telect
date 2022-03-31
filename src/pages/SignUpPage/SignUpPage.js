import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FormInputs from "../../components/FormInputs/FormInputs";
import "./SignUpPage.scss";

function SignUp(props) {
  const userSignUp = (e) => {
    e.preventDefault();

    console.log({
      name: e.target.name.value,
      username: e.target.username.value,
      password: e.target.password.value,
    });

    axios
      .post("http://localhost:8080/users/register", {
        name: e.target.name.value,
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then((res) => {
        console.log(res);
        props.history.push("/login");
      });
  };

  return (
    <div className="signup">
      <div className="signup__title-container">
        <h1 className="signup__title">Sign Up</h1>
      </div>
      <form className="signup__form" onSubmit={userSignUp}>
        <FormInputs
          placeholder="Type name here"
          label="Name"
          name="name"
          type="text"
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
        <button className="signup__signup-button" type="submit">Sign Up!</button>
      </form>
      <Link to="/login">
          <button  className="signup__login-button">Log In</button>
      </Link>
    </div>
  );
}
export default SignUp;
