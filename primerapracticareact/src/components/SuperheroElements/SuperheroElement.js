import React from "react";

function SuperheroElement(props){
    return(
        props.SuperheroInfo.map( (superhero, idx) => 
        <div key={superhero + idx} className="character-card">
            <img src={superhero.imageSrc} alt="superhero" />

            <h4>{superhero.name}</h4>

            <p>{superhero.description}</p>

            <a href="/">Ver más</a>

        </div>
        )
    )
}

export default SuperheroElement;