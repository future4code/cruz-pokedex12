// import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
// import axios from "axios";
// import styled from 'styled-components'
// import { HeaderDetalhes } from "../componetes/headerDetalhes";


const pokemon = {
    id: 1,
    moves: [
    {
        move: {
            name: "razor-wind",
            url: "https://pokeapi.co/api/v2/move/13/",
        },
    },

    {
        move: {
            name: "swords-dance",
            url: "https://pokeapi.co/api/v2/move/14/",
        },
    },

    {
        move: {
            name: "cut",
            url: "https://pokeapi.co/api/v2/move/15/",
        },
    },

    {
        move: {
            name: "bind",
            url: "https://pokeapi.co/api/v2/move/20/",
        },
    },
    ],
    name: "bulbasaur",

    sprites: {
    back_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
   
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    stats: [
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: "hp",
        url: "https://pokeapi.co/api/v2/stat/1/",
      },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: {
        name: "attack",
        url: "https://pokeapi.co/api/v2/stat/2/",
      },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: {
        name: "defense",
        url: "https://pokeapi.co/api/v2/stat/3/",
      },
    },
    {
      base_stat: 65,
      effort: 1,
      stat: {
        name: "special-attack",
        url: "https://pokeapi.co/api/v2/stat/4/",
      },
    },
    {
      base_stat: 65,
      effort: 0,
      stat: {
        name: "special-defense",
        url: "https://pokeapi.co/api/v2/stat/5/",
      },
    },
    
    ],
    types: [
    {
      slot: 1,
      type: {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/",
      },
    },
    {
      slot: 2,
      type: {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/",
      },
    },
    ],
};

export const DetalhesPage = (props) => {
    const history = useHistory();

    return (
    <div>
        <HeaderDetalhes/>
        <p>Detalhes</p>
        <Detalhes>
        <Img>
            <ImgFrontal src={pokemon.sprites.front_default} />
            <ImgCostas src={pokemon.sprites.back_default} />
        </Img>
        <Status>
            {pokemon.stats.map((stat) => {
                return(
                    <p>{`${stat.stat.name}: ${stat.base_stat}`}</p>
                )
            })}
        </Status>

        <Tipo>
            {pokemon.types.map((type) => {
                return(
                    <p>{`${type.type.name}: tipo ${type.slot}`}</p>
                )
            })}
        </Tipo>

        <Movimentos>
            {pokemon.moves.map((move) => {
                return(
                    <p>{`${move.move.name}: ${move.move.name}`}</p>
                )
            })}

        </Movimentos>
        </Detalhes>
        <button onClick={history.goBack}>voltar</button>
    </div>
    );
};

const Detalhes = styled.div`
    display: flex;
`;

const Status = styled.div`
    border: solid black;
    height: 250px;
    width: 220px;
    margin: 10px;
`;
const Img = styled.div``;

const ImgFrontal = styled.img`
    height: 200px;
    width: auto;
    margin: 10px;
`;

const ImgCostas = styled.img`
    height: 200px;
    width: auto;
    margin: 10px;
`;

const Tipo = styled.div`
    border: solid black;
    height: 250px;
    width: 220px;
    margin: 10px;
`;
const Movimentos = styled.div`
    border: solid black;
    height: 250px;
    width: 220px;
    margin: 10px;
`;
