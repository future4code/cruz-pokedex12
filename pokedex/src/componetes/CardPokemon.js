import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router";
import { goToDetalhesPage } from "../routes/coordinator"
import axios from 'axios';


export default function CardPokemon(props){

    const history = useHistory();
    const [fotoPokemon, setFotoPokemon] = useState([])

    const pegaInformacoesPokemon = async() =>{
        try{
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
            setFotoPokemon(response.data.sprites.front_default)
        }catch(erro){
            console.log("Erro",erro);
        }
    }
    
    useEffect(()=>{
        pegaInformacoesPokemon();
    },[])

    return(
        <CardPoke>
        <Img src={fotoPokemon} />
        <p>{props.name}</p>
        <Buttons>
            <button>Pegar</button>
            <button onClick={() => goToDetalhesPage(history)}>Detalhes</button>
        </Buttons>
    </CardPoke>
    )
}

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