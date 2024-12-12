import React from "react";
import "./index.css";

function Typography({ textSize = "md", className = "", children }) {
    const sizeClass = `typography--${textSize}`;
    return <p className={`typography ${sizeClass} ${className}`}>{children}</p>;
}

export default Typography;
