import React from "react";

function SideBarElement(props){
    return(
        props.Elements.map( (OneElement, idx) =>
        <li key={OneElement + idx} class="nav-item">
            <a class="nav-link" href="/">
                <i class="fas fa-fw fa-table"></i>
                <span>{OneElement}</span>
            </a>
        </li>
        )
    )
}

export default SideBarElement;