import React, { useContext, useEffect } from "react"
import styled from 'styled-components'
import {HeaderHome} from '../componetes/headerHome'
import CardPokemon from "../componetes/CardPokemon";
import GlobalStateContext from "../Context/GlobalContextState";

export const HomePage = () => {

    const {states, setters, requests,funcoes} = useContext(GlobalStateContext)

    useEffect(() => {
        requests.listaPokemons();
    }, [requests])

    const listaPokemonsNaTela = states.pokemonsApi && states.pokemonsApi.length > 0 && states.pokemonsApi.map((pokemon)=>{
        return <CardPokemon 
                    key={pokemon.name}
                    name={pokemon.name}
                    pokemon={pokemon}
                />
    })

  

    return (
        <Principal>
            <HeaderHome />
            <PrincipalCard>
                <ButtoesPage>
                    <BotoesPagina onClick={funcoes.botao1}>1</BotoesPagina>
                    <BotoesPagina onClick={funcoes.botao2}>2</BotoesPagina>
                    <BotoesPagina onClick={funcoes.botao3}>3</BotoesPagina>
                    <BotoesPagina onClick={funcoes.botao4}>4</BotoesPagina>
                </ButtoesPage>
                <CardsPokemon>
                   {listaPokemonsNaTela}
                </CardsPokemon>
            </PrincipalCard>
        </Principal>
    )
}
const Principal = styled.div`
    display:flex;
    flex-direction:column;
    height:100vh;
`

const PrincipalCard = styled.div`
    
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    margin:20px;
`

const CardsPokemon = styled.div`
    display:grid;
    grid-template-columns:repeat(4,1fr);
    grid-gap:10px;
    width:100%;
    justify-content:center;
`
const BotoesPagina = styled.button`
    height: 5vh;
    width: 5vh;
    margin: 1vh;
    border-radius: 2vh;

:focus {
    color: white;
    background-color: black;
}
` 
const ButtoesPage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 15vh;
` 