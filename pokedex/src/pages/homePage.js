import React, { useEffect, useState } from "react"
import styled from 'styled-components'
import axios from "axios";
import { Header } from "../componetes/Header";
import CardPokemon from "../componetes/CardPokemon";


export const HomePage = () => {
    
    const [pokemonsApi, setPokemonsApi] = useState([])

    const listaPokemons = async () => {
        try {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
            setPokemonsApi(response.data.results);
            console.log(pokemonsApi);
        } catch (erro) {
            console.log("Erro", erro);
        }
    }

    useEffect(() => {
        listaPokemons();
    }, [])

    const listaPokemonsNaTela = pokemonsApi && pokemonsApi.length > 0 && pokemonsApi.map((pokemons)=>{
        return <CardPokemon 
                    name={pokemons.name}
                />
    })

    return (
        <Principal>
            <Header />
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
