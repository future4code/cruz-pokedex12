import React, { useContext, useEffect, useState } from "react"
import {goToDetalhesPage} from "../routes/coordinator"
import { useHistory } from "react-router";
import styled from 'styled-components'
import CardPokedex from "../componetes/CardPokedex";
import { HeaderPokedex } from "../componetes/headerPokedex";
import GlobalStateContext from "../Context/GlobalContextState";

export const PokedexPage = () => {
    const history = useHistory();
    const {states, setters, requests} = useContext(GlobalStateContext)
    
    console.log(states.pokedex);
    const listaPokemonsNaTela = states.pokedex && states.pokedex.length > 0 && states.pokedex.map((pokemon)=>{
        return <CardPokedex 
                    key={pokemon.name}
                    name={pokemon.name}
                    pokemon={pokemon}
                />
    })


    return(
    <div>
       <Principal>
            <HeaderPokedex />
            <PrincipalCard>
                <CardsPokemon>
                   {listaPokemonsNaTela}
                </CardsPokemon>
            </PrincipalCard>
        </Principal>
    </div>
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