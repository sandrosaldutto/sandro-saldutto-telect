import "./Switch.scss";


function Switch() {
  return (
  <>
    <label className="switch">
        <input type="checkbox" className="switch__input"/>
        <span className="switch__slider" />
    </label>
  </>
  );
}

export default Switch;
