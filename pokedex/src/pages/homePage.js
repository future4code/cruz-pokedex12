import React from "react"
import {goToPokedexPage} from "../routes/coordinator"
import { useHistory } from "react-router";

export const HomePage = () => {
    const history = useHistory();
    return(
    <div>
        <p>Home</p>
        <div>
            <img />
            <p></p>
            <button>Pegar</button>
            <button>Detalhes</button>
        </div>
        <button onClick={() => goToPokedexPage(history)}>Pokedex</button>
    </div>
    )
} 