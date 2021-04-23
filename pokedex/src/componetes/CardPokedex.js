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
            <Nome>{name}</Nome>
            <Img src={fotoPokemon} />
            <Buttons>
                <Pegar onClick={() => deletarPokemon(pokemon)}>deletar</Pegar>
                <Detalhes onClick={() => goToDetalhesPage(history,name)}>Detalhes</Detalhes>
            </Buttons>
        </CardPoke>
    )
}

const CardPoke = styled.div`
    background-color:lightgrey;
    border: solid black;
    height: 275px;
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border-radius: 5px;
`

const Pegar = styled.button`
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #393332;
  border: none;
  border-radius: 15px;
  box-shadow: 0 2px #999;
  :focus {
    color: white;
    background-color: black;
}
`
const Detalhes = styled.button`
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #393332;
  border: none;
  border-radius: 15px;
  box-shadow: 0 2px #999;
  :focus {
    color: white;
    background-color: black;
}
`

const Buttons = styled.div`
    display:flex;
    width:100%;
    justify-content:space-evenly;
`

const Nome = styled.h2`
font-family: 'Zen Dots', cursive;
`

const Img = styled.img`
    height: 100px;
    margin: 10px;
    width: auto;
`