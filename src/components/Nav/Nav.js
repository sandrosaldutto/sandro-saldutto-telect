import "./Nav.scss";
import logoIcon from "../../assets/logos/logo-icon.svg";
import listIcon from "../../assets/icons/list.svg";
import profileIcon from "../../assets/icons/profile.svg";
import wordmarkIcon from "../../assets/logos/logo-wordmark.svg"

function Nav() {
  return (
    <section className="nav">
      <img src={profileIcon} alt="" className="nav__profile"></img>
      <img src={logoIcon} alt="" className="nav__logo"></img>
      <img src={wordmarkIcon} alt="" className="nav__wordmark"></img>
      <img src={listIcon} alt="" className="nav__list"></img>
    </section>
  );
}

export default Nav;
