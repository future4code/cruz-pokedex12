import React, { useContext, useEffect, useState } from "react"
import styled from 'styled-components'
import { useHistory } from "react-router";
import { goToDetalhesPage } from "../routes/coordinator"
import GlobalStateContext from "../Context/GlobalContextState";
import axios from 'axios';
import { UrlBase } from '../Constants/Url'


export default function CardPokemon(props) {
    const {states, setters, requests} = useContext(GlobalStateContext)
    const history = useHistory();
    const [fotoPokemon, setFotoPokemon] = useState([])
    const { name } = props;

    const deletarPokemon = (nome) => {

        

    }

    useEffect(() => {
        pegaInformacoesPokemon();
    }, [])

    return (
        <CardPoke>
            <h1>{name}</h1>
            <Img src={fotoPokemon} />
            <Buttons>
                <button>deletar</button>
                <button onClick={() => goToDetalhesPage(history,name)}>Detalhes</button>
            </Buttons>
        </CardPoke>
    )
}

const CardPoke = styled.div`
    background-color:lightgrey;
    border: solid black;
    height: 350px;
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