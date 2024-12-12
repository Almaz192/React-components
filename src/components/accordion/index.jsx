import React, { useState } from "react";
import "./index.css";

function Accordion({ title, defaultOpen = false, children }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion">
            <div className="accordion-header" onClick={toggleAccordion}>
                <h3>{title}</h3>
                <span>{isOpen ? "-" : "+"}</span>
            </div>
            {isOpen && <div className="accordion-content">{children}</div>}
        </div>
    );
}

export default Accordion;
