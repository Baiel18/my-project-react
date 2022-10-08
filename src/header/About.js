import React, { useState } from "react";

function About() {
    const [pokemon, setPokemon] = useState([])
    fetch('https://pokeapi.co/api/v2/pokemon?limit=40')
        .then(response => response.json())
        .then(data =>setPokemon(data.results))
    return (
        <div className="webSite">
            
        </div>
    )
}
export default About