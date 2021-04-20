import React, { useEffect, useState } from "react"
import { goToDetalhesPage } from "../routes/coordinator"
import { useHistory } from "react-router";
import styled from 'styled-components'
import axios from "axios";


export const HomePage = () => {
    const history = useHistory();
    const [pokemonsApi,setPokemonsApi] = useState([])

    const listaPokemons = async() =>{
        try{
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
            setPokemonsApi(response.data.results);
        }catch(erro){
            console.log("Erro",erro);
        }
    }

    useEffect(()=>{
        listaPokemons();
    },[])

    return (
            <Principal>
                <CardsPokemon>
                    <CardPoke>
                        <Img src={"https://img.pokemondb.net/artwork/charmeleon.jpg"} />
                        <p>pokemon</p>
                        <Buttons>
                            <button>Pegar</button>
                            <button onClick={() => goToDetalhesPage(history)}>Detalhes</button>
                        </Buttons>
                    </CardPoke>
                    <CardPoke>
                        <Img src={"https://img.pokemondb.net/artwork/charmeleon.jpg"} />
                        <p>pokemon</p>
                        <Buttons>
                            <button>Pegar</button>
                            <button onClick={() => goToDetalhesPage(history)}>Detalhes</button>
                        </Buttons>
                    </CardPoke>
                    <CardPoke>
                        <Img src={"https://img.pokemondb.net/artwork/charmeleon.jpg"} />
                        <p>pokemon</p>
                        <Buttons>
                            <button>Pegar</button>
                            <button onClick={() => goToDetalhesPage(history)}>Detalhes</button>
                        </Buttons>
                    </CardPoke>
                    <CardPoke>
                        <Img src={"https://img.pokemondb.net/artwork/charmeleon.jpg"} />
                        <p>pokemon</p>
                        <Buttons>
                            <button>Pegar</button>
                            <button onClick={() => goToDetalhesPage(history)}>Detalhes</button>
                        </Buttons>
                    </CardPoke>
                    <CardPoke>
                        <Img src={"https://img.pokemondb.net/artwork/charmeleon.jpg"} />
                        <p>pokemon</p>
                        <Buttons>
                            <button>Pegar</button>
                            <button onClick={() => goToDetalhesPage(history)}>Detalhes</button>
                        </Buttons>
                    </CardPoke>
                    <CardPoke>
                        <Img src={"https://img.pokemondb.net/artwork/charmeleon.jpg"} />
                        <p>pokemon</p>
                        <Buttons>
                            <button>Pegar</button>
                            <button onClick={() => goToDetalhesPage(history)}>Detalhes</button>
                        </Buttons>
                    </CardPoke>
                    <CardPoke>
                        <Img src={"https://img.pokemondb.net/artwork/charmeleon.jpg"} />
                        <p>pokemon</p>
                        <Buttons>
                            <button>Pegar</button>
                            <button onClick={() => goToDetalhesPage(history)}>Detalhes</button>
                        </Buttons>
                    </CardPoke>
                    <CardPoke>
                        <Img src={"https://img.pokemondb.net/artwork/charmeleon.jpg"} />
                        <p>pokemon</p>
                        <Buttons>
                            <button>Pegar</button>
                            <button onClick={() => goToDetalhesPage(history)}>Detalhes</button>
                        </Buttons>
                    </CardPoke>
                </CardsPokemon>
            </Principal>
    )
}

const Principal = styled.div`
    height:100vh;
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