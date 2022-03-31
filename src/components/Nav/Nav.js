import "./Nav.scss";
import logoIcon from "../../assets/logos/logo-icon.svg";
import listIcon from "../../assets/icons/list.svg";
import loginSignupIcon from "../../assets/icons/login-signup.svg";
import wordmarkIcon from "../../assets/logos/logo-wordmark.svg"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Nav() {
  return (
    <section className="nav">
      <Link to="/signup">
      <img src={loginSignupIcon} alt="Login-signup" className="nav__login-signup"/>
      </Link>
      <Link to="/">
      <img src={logoIcon} alt="Home" className="nav__logo"/>
      </Link>
      {/* <Link to="/"> */}
      <img src={wordmarkIcon} alt="Home" className="nav__wordmark"></img>
      {/* </Link> */}
      <img src={listIcon} alt="My list" className="nav__list"></img>
    </section>
  );
}

export default Nav;
