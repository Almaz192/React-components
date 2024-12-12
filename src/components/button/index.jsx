import "./index.css";
function Button(props) {
    const {
        size = "md",
        variant = "primary",
        children,
        type,
        onClick,
        disabled = false,
    } = props;
    const className = `my-button my-button--${variant} my-button--${size}`;

    return (
        <button
            className={className}
            children={children}
            type={type}
            onClick={onClick}
            disabled={disabled}
        ></button>
    );
}

export default Button;
