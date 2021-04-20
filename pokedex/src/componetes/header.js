import React from "react"
import { useHistory } from "react-router";
import styled from 'styled-components'
import {goToPokedexPage} from "../routes/coordinator"

export const Header = () => {
    const history = useHistory();
    return(
        <Conteiner>
            <button onClick={() => goToPokedexPage(history)}>Pokedex</button>
            <Titulo>Pokedex</Titulo>
            <img src="https://www.pngix.com/pngfile/big/687-6878828_transparent-pokemon-logo-png-transparent-background-pokeball-transparent.png"/>
        </Conteiner>
    )

}

const Titulo = styled.h1`
    margin: 0px;
`

const Conteiner = styled.div`
    background-color: red;
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 16px;
    height: 30px;
`