import React, { useContext, useEffect } from "react"
import styled from 'styled-components'
import {HeaderHome} from '../componetes/headerHome'
import CardPokemon from "../componetes/CardPokemon";
import GlobalStateContext from "../Context/GlobalContextState";

export const HomePage = () => {

    const {states, setters, requests,funcoes} = useContext(GlobalStateContext)
    
    /*
        Um filtro do array que vem da api de pokemons , Esse array filtrado é oque aparece na tela.
        A funcao some , verifica se o Pokemon esta na pokedex.
        Se estiver , ele retorna um FALSE para o filtro. Um retorno false para o filtro, ele tira o elemento do array
        Se o retorno for True , ele deixa o elemento no array.
        A ideia é , se o pokemon nao estiver na pokedex , ele retorna um FALSE no some e um TRUE para o filter
        Se o pokemon estiver na pokedex , ele retorna um True para o some e um FALSE para o filter.
    */
   
    let arrayPokemons = states.pokemonsApi.filter((pokemon) => {
        const estaNaPokedex = states.pokedex.some((pokemonPokedex) => {
          return pokemonPokedex.name === pokemon.name
        })
        if(estaNaPokedex) {
            return false        
        } else {
            return true
        }
      })

    const listaPokemonsNaTela = arrayPokemons && arrayPokemons.length > 0 && arrayPokemons.map((pokemon)=>{
        return <CardPokemon 
                    key={pokemon.name}
                    name={pokemon.name}
                    pokemon={pokemon}
                />
    })

    useEffect(()=>{
        requests.listaPokemons();
    },[requests])

    
    
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
    @media(max-width: 800px) {
        min-width:470px;
  }
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
    
    @media(max-width: 800px) {
        grid-template-columns:repeat(2,1fr);
        min-width:400px;
    }

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