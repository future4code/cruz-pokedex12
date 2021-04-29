import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import GlobalState from "../Context/GlobalState"
import { UrlBase } from '../Constants/Url'
import styled from "styled-components";
import { HeaderDetalhes } from "../componetes/headerDetalhes";

export const DetalhesPage = () => {
    const history = useHistory()
    const {nomePokemon} = useParams()
    const [pokemon, setPokemon] = useState({})

    useEffect (() => {
    axios
    .get(`${UrlBase}/${nomePokemon}`)
    .then((response) => {
        setPokemon(response.data)
    })

    }, [])

    return (
        <div>
            {pokemon.name ?  <div>
            <HeaderDetalhes/>
            <Detalhes>
                <DivImg> 

                    <ImgFrontal src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default} />
                    <ImgCostas src={pokemon.sprites.versions['generation-v']['black-white'].animated.back_default} />
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
                {pokemon.moves.map((move, index) => {
                    return(
                        index < 5 && <p>{`${move.move.name}`}</p>
                    )
                })}
            </Movimentos>
            </PrincipaisAtaques>
            </Detalhes>
            <button onClick={history.goBack}>voltar</button>
        </div> : <div>Carregando...</div>}
    </div>
    )
}

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

const ImgFrontal = styled.img`
    border-radius: 2vh;
    background-color:lightgrey;
    border: solid black;
    height: 25vh;
`;

const ImgCostas = styled.img`
    border-radius: 2vh;
    background-color:lightgrey;
    border: solid black;
    height: 25vh;
`;

const Status = styled.div`
    border-radius: 2vh;
    background-color:lightgrey;
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
`;

const Tipo = styled.div`
    border-radius: 2vh;
    background-color:lightgrey;
    border: solid black;
    display: flex;
    height: 10%;
    justify-content: space-around;
`;

const Movimentos = styled.div`
    border-radius: 2vh;
    background-color:lightgrey;
    border: solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
    min-height: 75%;
`;