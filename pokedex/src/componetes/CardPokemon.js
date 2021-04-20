import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router";
import { goToDetalhesPage } from "../routes/coordinator"


const CardPoke = styled.div`
    background-color:lightgrey;
    border: solid black;
    height: 300px;
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const Buttons = styled.div`
    display:flex;
    width:100%;
    justify-content:space-evenly;
`

const Img = styled.img`
    height: 200px;
    width: auto;
`
export default function CardPokemon(props){

    const history = useHistory();
    

    return(
        <CardPoke>
        <Img src={"https://img.pokemondb.net/artwork/charmeleon.jpg"} />
        <p>{props.name}</p>
        <Buttons>
            <button>Pegar</button>
            <button onClick={() => goToDetalhesPage(history)}>Detalhes</button>
        </Buttons>
    </CardPoke>
    )
}