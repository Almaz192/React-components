import React from "react";
import "./index.css";

function Tooltip({ text, position = "top", children }) {
    return (
        <div className="tooltip-container">
            {children}
            <span className={`tooltip-text tooltip-${position}`}>{text}</span>
        </div>
    );
}

export default Tooltip;
