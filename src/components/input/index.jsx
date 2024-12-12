import "./index.css";

function Input(props) {
    const {
        type = "text",
        placeholder = "",
        value,
        onChange,
        disabled = false,
        label = "",
        danger = false,
    } = props;

    const className = `my-input ${danger ? "my-input--danger" : ""}`;

    return (
        <div className="input-wrapper">
            {label && (
                <label
                    className={`input-label ${danger ? "label-danger" : ""}`}
                >
                    {label}
                </label>
            )}
            <input
                className={className}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    );
}

export default Input;
