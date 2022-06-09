import "./Switch.scss";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../config/index"

function Switch({ showId }) {
  const [toggle, setToggle] = useState(true);
  const [showLogout, setShowLogout] = useState(
    sessionStorage.authToken !== undefined
  );

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const handleToggle = (showId) => {
    axios
      .post(`${API_URL}/mylist/`, {
        showId: showId,
        userId: sessionStorage.getItem("userId"),
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <section>
      { showLogout ? (  <label className="switch">
        <input
          onClick={toggler}
          onChange={() => {
            handleToggle(showId);
          }}
          type="checkbox"
          className="switch__input"
        />
        <span className="switch__slider" />
      </label>) : ( <label className="switch">
        <input
          type="checkbox"
          className="switch__input--disable"
        />
        <span className="switch__slider--disable" />
      </label>)}
  
      </section>
  );
}

export default Switch;
