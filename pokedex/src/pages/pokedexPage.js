import React from "react"
import {goToDetalhesPage} from "../routes/coordinator"
import { useHistory } from "react-router";

export const PokedexPage = () => {
    const history = useHistory();
    return(
    <div>
        <p>Pokedex</p>
        <button onClick={() => goToDetalhesPage(history)}>Detalhes</button>
        <button onClick={history.goBack}>voltar</button>
    </div>
    )
} 