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
    const { name, pokemon } = props;

    const pegaInformacoesPokemon = async () => {
        try {
            const response = await axios.get(`${UrlBase}/${name}`)
            setFotoPokemon(response.data.sprites.versions['generation-v']['black-white'].animated.front_default)
        } catch (erro) {
            console.log("Erro", erro);
        }
    }


    const deletarPokemon = (removerPokemon) => {
        const position = states.pokedex.findIndex((pokemon) => {
          return pokemon.name === removerPokemon.name;
        });
        let novoPokemon = [...states.pokedex];
        if (novoPokemon[position] !== 1) {
            novoPokemon.splice(position, 1);
        }
        setters.setPokedex(novoPokemon);
        alert(`${removerPokemon.name} foi deletado com sucesso!`);
      };

    useEffect(() => {
        pegaInformacoesPokemon();
    }, [])

    return (
        <CardPoke>
            <h1>{name}</h1>
            <Img src={fotoPokemon} />
            <Buttons>
                <button onClick={() => deletarPokemon(pokemon)}>deletar</button>
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