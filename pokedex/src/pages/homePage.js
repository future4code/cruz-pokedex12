import React, { useContext, useEffect, useState } from "react"
import styled from 'styled-components'
import axios from "axios";
import {HeaderHome} from '../componetes/headerHome'
import CardPokemon from "../componetes/CardPokemon";
import {UrlBase} from '../Constants/Url'
import GlobalContextState from '../Context/GlobalContextState'

export const HomePage = () => {
    
    const [pokemonsApi, setPokemonsApi] = useState([])
    const {nome} = useContext(GlobalContextState)

    console.log(nome);
    const listaPokemons = async () => {
        try {
            const response = await axios.get(`${UrlBase}`);
            setPokemonsApi(response.data.results);
        } catch (erro) {
            console.log("Erro", erro);
        }
    }

    useEffect(() => {
        listaPokemons();
    }, [])

    const listaPokemonsNaTela = pokemonsApi && pokemonsApi.length > 0 && pokemonsApi.map((pokemons)=>{
        return <CardPokemon 
                    key={pokemons.name}
                    name={pokemons.name}
                />
    })

    return (
        <Principal>
            <HeaderHome />
            <PrincipalCard>
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
