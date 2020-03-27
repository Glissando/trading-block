import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavElement(props) {

    function handleClick(e){
        props.onClick && props.onClick(props.index, props.name);
    }

    return(
        <div className={props.className ? props.className:"Nav-element"} id={props.active}onClick={handleClick}>
            { props.icon && <FontAwesomeIcon className="Nav-icon" icon={props.icon} color="green" /> }
            <h1 className="Nav-text">{props.name}</h1>
        </div>
    );
}