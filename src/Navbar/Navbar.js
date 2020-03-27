import React, { useState } from 'react';
import NavElement from '../NavElement/NavElement';

export default function Navbar(props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    function onClick(index, name) {
        if(currentIndex !== index && props.onNavChange) {
            props.onNavChange(index, name);
        }
        setCurrentIndex(index);
    }

    return(
        <div className="Navbar">
            <NavElement name="Fintech" className="Title"></NavElement>
            {props && props.elements.map((element, index) => (
                <NavElement key={element.name} active={currentIndex === index ? "Active" : "Inactive"}
                name={element.name} icon={element.icon} onClick={onClick} index={index}></NavElement>
            ))}
        </div>
    );
}