import React from "react";
import SuperheroElement from "../SuperheroElements/SuperheroElement";
import "./Superhero.css"

function Superhero(){
    let SuperheroInfo = [
        {
            name: "Ahsoka Tano",
            description: "Personaje de Star Wars",
            imageSrc: "ahsoka.jpg"
        },
        {
            name: "Anakin Skywalker",
            description: "Personaje de Star Wars",
            imageSrc: "anakin.jpg"
        },
        {
            name: "Batman",
            description: "Personaje de DC Comics",
            imageSrc: "batman.jpg" 
        },
        {
            name: "Hulk",
            description: "Personaje de Marvel",
            imageSrc: "hulkSmall.jpg"
        },
        {
            name: "Kylo Ren",
            description: "Personaje de Star Wars",
            imageSrc: "kyloRen.jpg"
        },
        {
            name: "Luke Skywalker",
            description: "Personaje de Star Wars",
            imageSrc: "luke.jpg"
        },
        {
            name: "Obi Wan Kenobi",
            description: "Personaje de Star Wars",
            imageSrc: "obiWan.jpg"
        },
        {
            name: "Dr. Strange",
            description: "Personaje de Marvel",
            imageSrc: "strange.jpg"
        }
    ]
    return(
        SuperheroInfo.map( (oneSuperhero, idx) =>
            <SuperheroElement key={oneSuperhero + idx} superheroInfo={oneSuperhero}/>    
        )
    )
}

export default Superhero;
