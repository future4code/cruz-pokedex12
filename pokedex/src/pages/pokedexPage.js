import React, { useContext, useEffect, useState } from "react"
import {goToDetalhesPage} from "../routes/coordinator"
import { useHistory } from "react-router";
import styled from 'styled-components'
import { HeaderPokedex } from "../componetes/headerPokedex";

export const PokedexPage = () => {
    const history = useHistory();
    

    return(
    <div>
        <HeaderPokedex/>
        <p>Pokedex</p>
        <CardPoke>
            <Img src={"https://img.pokemondb.net/artwork/charmeleon.jpg"} />
            <p></p>
            <button>Remover</button>
            <button onClick={() => goToDetalhesPage(history)}>Detalhes</button>
        </CardPoke>
        <button onClick={history.goBack}>voltar</button>
    </div>
    )
} 

const CardPoke = styled.div`
border: solid black;
height: 250px;
width: 220px;
`
const Img = styled.img`
height: 200px;
width: auto;
`