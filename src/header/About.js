import React, { useEffect, useState } from "react";

function About() {
    const [pokemons, setPokemon] = useState([])
    const [loners, setLoners] = useState([])
    const POKEMON = 'https://pokeapi.co/api/v2/pokemon?limit=18'
    useEffect(() => {
        fetch(POKEMON)
            .then(response => response.json())
            .then(function (pokData) {
                pokData.results.forEach(pok => {
                    let url = pok.url
                    fetch(url)
                        .then(response => response.json())
                        .then(function (pokeData) {
                            let listPok = pokeData
                            setPokemon(pokemons => [...pokemons, listPok])
                        })
                })
            })
    }, [])
    // console.log(pokemons)
    
    function onLoners(e) {
        setLoners(
        <div className="loners">
            <img className="lonersImg" src={e.sprites.other.dream_world.front_default} alt={e.name} />
            <h1>{e.name}</h1>
            <h2>id : {e.id}</h2>
            <h2>height : {e.height}px</h2>
            <h2>weight : {e.weight}px</h2><br/>
            <span onClick={()=>alert('purchase')}className="buy" >купить {e.base_experience}сом</span>
        </div>
        )
    }
    return (
        <div className="webSite">
            <div className="left-content">
                <h1 className="toy">Pokemon Toy</h1>
                <ul className="pokemons">
                    {
                        pokemons.slice(0,18).map(pok => {
                            return <li onClick={() => onLoners(pok)}>
                                <h1>{pok.name} </h1>
                                <img className="imgPokemon" src={pok.sprites.other.dream_world.front_default} alt={pok.name} />
                                <h1>{pok.id} </h1>
                                <h2 className="som">{pok.base_experience}<span className="somwithe">сом</span></h2>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className="right-content">
                <div>
                    {loners}
                </div>
            </div>
        </div>
    )
}
export default About