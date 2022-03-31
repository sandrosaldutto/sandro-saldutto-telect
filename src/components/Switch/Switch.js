import "./Switch.scss";
import { useState } from "react";

function Switch({ id }) {
  const [toggle, setToggle] = useState(false);
  
  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
    console.log(toggle)
  };

  const handleToggle = (e, id) => {
    console.log(id);
  };

  return (
    <>
      <label className="switch">
        <input
          onClick={toggler}
          onChange={(e) => {
            handleToggle(e, id);
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
