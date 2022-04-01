import "./Nav.scss";
import listIcon from "../../assets/icons/list.svg";
import loginSignupIcon from "../../assets/icons/login-signup.svg";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from 'react';


function Nav() {
  const [logout, setLogout] = useState(sessionStorage.authToken !== undefined);
  console.log(sessionStorage.authToken)

  const history = useHistory();
  const logoutHandler = () => {
    setLogout(false)
    sessionStorage.clear();
    history.push("/login");
  };

  return (
    <section className="nav">
      <div className="nav__login-logout">
        <Link to="/login">
          <img
            src={loginSignupIcon}
            alt="Login-signup"
            className="nav__login-signup"
          />
        </Link>
        {logout ? <button onClick={logoutHandler}>Logout</button> : ""}
      </div>
      <Link to="/">
        <div className="nav__logo"></div>
      </Link>
      <Link to="/mylist">
        <img src={listIcon} alt="My list" className="nav__list"></img>
      </Link>
    </section>
  );
}

export default Nav;
