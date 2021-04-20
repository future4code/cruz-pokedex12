import React from "react"
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import { HeaderDetalhes } from "../componetes/headerDetalhes";

export const DetalhesPage = () => {
const history = useHistory();
    return(
    <div>
        <HeaderDetalhes/>
        <p>Detalhes</p>
        <Detalhes>
            <Img>
                <ImgFrontal src={"https://img.pokemondb.net/artwork/charmeleon.jpg"}/>
                <ImgCostas src={"https://img.pokemondb.net/artwork/charmeleon.jpg"}/>
            </Img>
            <Status>
                <p>Hp; 100</p>
                <p>ataque:50</p>
                <p>defesa:52</p>
                <p>ataque epecial: 50</p>
                <p>velocidade: 20</p>
            </Status>
            <Tipo>
                <p>tipo 1</p>
                <p>tipo 2</p>
            </Tipo>
            <Movimentos>
                <p>movimento 1</p>
                <p>movimento 2</p>
                <p>movimento 3</p>
                <p>movimento 4</p>
            </Movimentos>
        </Detalhes>
        <button onClick={history.goBack}>voltar</button>
    </div>
    )
} 

const Detalhes = styled.div`
display: flex;

`

const Status = styled.div`
border: solid black;
height: 250px;
width: 220px;
margin: 10px;
`
const Img = styled.div`
`

const ImgFrontal = styled.img`
height: 200px;
width: auto;
margin: 10px;
`

const ImgCostas = styled.img`
height: 200px;
width: auto;
margin: 10px;
`

const Tipo = styled.div`
border: solid black;
height: 250px;
width: 220px;
margin: 10px;
`
const Movimentos = styled.div`
border: solid black;
height: 250px;
width: 220px;
margin: 10px;`