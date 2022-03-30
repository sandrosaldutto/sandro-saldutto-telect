import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FormInputs from '../../components/FormInputs/FormInputs';
import "./SignUpPage.scss";

function SignUp(props) {
    const userSignUp = (e) => {
        e.preventDefault();

        console.log({
            name: e.target.name.value,
            username: e.target.username.value,
            password: e.target.password.value,
        })

        axios.post('http://localhost:8080/users/register', {
            name: e.target.name.value,
            username: e.target.username.value,
            password: e.target.password.value,
        })
        .then(res => {
            console.log(res)
            props.history.push('/login')
        })
    }

    return (
        <div className="signup">
            <h1>
                Sign Up
            </h1>
            <form onSubmit={userSignUp}>
                <FormInputs label="Name" name="name" type="text" />
                <FormInputs label="Username" name="username" type="text" />
                <FormInputs label="Password" name="password" type="password" />

                <button type="submit">Sign Up!</button>
            </form>
            <Link to="/login">Log In</Link>
        </div>
    )
}
export default SignUp