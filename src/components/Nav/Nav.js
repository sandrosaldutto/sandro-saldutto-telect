import "./Nav.scss";
import listIcon from "../../assets/icons/list.svg";
import loginSignupIcon from "../../assets/icons/login-signup.svg";
import { NavLink, Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";

function Nav({ onClick, showLogout }) {

  const history = useHistory();

  const logoutHandler = () => {
    onClick()
    history.push("/login") 
  };
  
  return (
    <section className="nav">
      <div className="nav__login-logout">
        <NavLink to="/login" activeClassName="nav__login-signup-active">
          {!showLogout ? (
            <img
              src={loginSignupIcon}
              alt="Login-signup"
              className="nav__login-signup"
            />
          ) : (
            ""
          )}
        </NavLink>
        {showLogout ? (
          <button className="nav__logout" onClick={logoutHandler}>
            Logout
          </button>
        ) : (
          ""
        )}
      </div>
      <Link to="/">
        <div className="nav__logo"></div>
      </Link>
      <NavLink to="/mylist" activeClassName="nav__list-active">
        <img src={listIcon} alt="My list" className="nav__list"></img>
      </NavLink>
    </section>
  );
}

export default Nav;
