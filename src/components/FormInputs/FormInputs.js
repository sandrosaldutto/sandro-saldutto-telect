import "./FormInputs.scss";

function FormInputs({ label, name, type, placeholder }) {
  return (
    <div className="input">
      <label className="input__label" htmlFor={name}>
        {label}
      </label>
      <input
        className="input__input-field"
        type={type}
        placeholder={placeholder}
        id={name}
        name={name}
      />
    </div>
  );
}

export default FormInputs;
