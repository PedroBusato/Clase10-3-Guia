import React from "react";
import SuperheroElement from "../SuperheroElements/SuperheroElement";
import Ahsoka from "../superheroImages/ahsoka.jpg";
import Anakin from "../superheroImages/anakin.jpg";
import Batman from "../superheroImages/batman.jpg";
import Hulk from "../superheroImages/hulkSmall.jpg";
import KyloRen from "../superheroImages/kyloRen.jpg";
import Luke from "../superheroImages/luke.jpg"
import ObiWan from "../superheroImages/obiWan.jpg"
import DrStrange from "../superheroImages/strange.jpg"

function Superhero(){
    let SuperheroInfo = [
        {
            name: "Ahsoka Tano",
            description: "Personaje de Star Wars",
            imageSrc: Ahsoka
        },
        {
            name: "Anakin Skywalker",
            description: "Personaje de Star Wars",
            imageSrc: Anakin
        },
        {
            name: "Batman",
            description: "Personaje de DC Comics",
            imageSrc: Batman 
        },
        {
            name: "Hulk",
            description: "Personaje de Marvel",
            imageSrc: Hulk
        },
        {
            name: "Kylo Ren",
            description: "Personaje de Star Wars",
            imageSrc: KyloRen
        },
        {
            name: "Luke Skywalker",
            description: "Personaje de Star Wars",
            imageSrc: Luke 
        },
        {
            name: "Obi Wan Kenobi",
            description: "Personaje de Star Wars",
            imageSrc: ObiWan
        },
        {
            name: "Dr. Strange",
            description: "Personaje de Marvel",
            imageSrc: DrStrange
        }
    ]
    return(
        <div className="superHero-container">
            <SuperheroElement SuperheroInfo={SuperheroInfo}/>
        </div>
    )
}


export default Superhero;
