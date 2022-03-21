import React from "react";
import "./SuperheroElement.css"

function SuperheroElement(props){
    return(
        <div className="character-card">
            <img src={`/images/superHeroImages/${props.superheroInfo.imageSrc}`} alt="superhero" />

            <h4>{props.superheroInfo.name}</h4>

            <p>{props.superheroInfo.description}</p>

            <a href="/">Ver más</a>

        </div>
        )
}

export default SuperheroElement;