// import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
// import axios from "axios";
// import styled from 'styled-components'
import { HeaderDetalhes } from "../componetes/headerDetalhes";


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



//--------------------------------------MOCK---------------------------------------
export const DetalhesPage = (props) => {
    const history = useHistory();

    return (
    <div>
        <HeaderDetalhes/>
        <Detalhes>

            <DivImg> 
                <ImgFrontal src={pokemon.sprites.front_default} />
                <ImgCostas src={pokemon.sprites.back_default} />
            </DivImg>

        <Status>
          <h1>Poderes</h1>
            {pokemon.stats.map((stat) => {
                return(
                    <p>{`${stat.stat.name}: ${stat.base_stat}`}</p>
                )
            })}
        </Status>

        <PrincipaisAtaques>
        <Tipo>
            {pokemon.types.map((type) => {
                return(
                    <p>{`${type.type.name}`}</p>
                )
            })}
        </Tipo>

        <Movimentos>
          <h1>Principais ataques</h1>
            {pokemon.moves.map((move) => {
                return(
                    <p>{`${move.move.name}`}</p>
                )
            })}
        </Movimentos>
        </PrincipaisAtaques>

        </Detalhes>
        <button onClick={history.goBack}>voltar</button>
    </div>
    );
};
//---------------------------------------------------------------------------------------


const Detalhes = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 80vh;
    margin: 20px 10vw;

    >h1 {
      display: block;
      align-self: center;
    }

    >p {
      display: block;
      margin-block-start: 1em;
      margin-inline-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
`;

const DivImg = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    height: 75%;
    justify-content: space-between;
`;

// const Img = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-self: center;
//     height: 75%;
// `;

const ImgFrontal = styled.img`
    background-color: rgb(241, 241, 241);
    border: solid black;
    height: 25vh;
    /* height: 180px;
    width: auto;
    margin: 40px; */
`;

const ImgCostas = styled.img`
    background-color: rgb(241, 241, 241);
    border: solid black;
    height: 25vh;
    /* height: 180px;
    width: auto;
    margin: 40px; */
`;

const Status = styled.div`
    background-color: rgb(241, 241, 241);
    border: solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 75%;
    align-self: center;
    width: 300px;
    padding-left: 20px;
`;

const PrincipaisAtaques = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 20px;
    height: 75%;
    align-self: center;
    /* height: 40px;
    width: 440px;
    margin: 10px; */
`;

const Tipo = styled.div`
    background-color: rgb(241, 241, 241);
    border: solid black;
    display: flex;
    height: 10%;
    justify-content: space-around;
`;

const Movimentos = styled.div`
    background-color: rgb(241, 241, 241);
    border: solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
    height: 75%;
    /* height: 440px;
    width: 220px;
    margin: 10px; */
`;
