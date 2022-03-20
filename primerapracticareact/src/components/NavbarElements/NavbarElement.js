import React from "react";

function NavbarElement(props){
    return(
        props.Elements.map( (OneElement, idx) =>
            <li key={OneElement + idx} className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                    <i className="fas fa-bell fa-fw"></i>
                    <span className="badge badge-danger badge-counter">{OneElement}</span>
                </a>
            </li>
        )
    )
};

export default NavbarElement;


