import "./Switch.scss";
import { useState } from "react";
import axios from 'axios';

function Switch({ showId }) {
  const [toggle, setToggle] = useState(true);
  
  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
    console.log(toggle)
  };

  const handleToggle = (e, showId, userId) => {
    console.log(showId);
    axios
      .post("http://localhost:8080/mylist/", {
        showId: showId,
        userId: userId
      })
      .then(res => {
        console.log(res)
      })
  };

  return (
    <>
      <label className="switch">
        <input
          onClick={toggler}
          onChange={(e) => {
            handleToggle(e, showId);
          }}
          type="checkbox"
          className="switch__input"
        />
        <span className="switch__slider" />
      </label>
    </>
  );
}

export default Switch;
