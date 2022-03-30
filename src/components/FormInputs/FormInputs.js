import "./FormInputs.scss";

function FormInputs({ label, name, type }) {
    return (
        <div>
            <label htmlFor={name}>
                {label}
            </label>
            <input type={type} id={name} name={name}/>
        </div>
    );
}

export default FormInputs;
