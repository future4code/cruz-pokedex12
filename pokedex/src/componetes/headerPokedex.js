import React from "react"
import { useHistory } from "react-router";
import styled from 'styled-components'
import { goToHomePage } from "../routes/coordinator";

export const HeaderPokedex = () => {
    const history = useHistory();
    return(
        <Conteiner>
            <button onClick={history.goBack}>voltar</button>
            <Titulo>Pokedex</Titulo>
            <Botão onClick={() => goToHomePage(history)}>
                <Img src="https://www.pngix.com/pngfile/big/687-6878828_transparent-pokemon-logo-png-transparent-background-pokeball-transparent.png"/>
            </Botão>
       </Conteiner>
    )

}

const Botão = styled.button`
    border: none;
    background-color: red;
`

const Img = styled.img`
height: 30px;
`

const Titulo = styled.h1`
    margin: 0px;
`

const Conteiner = styled.div`
    background-color: red;
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 16px;
    height: 30px;
`