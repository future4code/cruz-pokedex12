import React from "react"
import { useHistory } from "react-router";
import styled from 'styled-components'
import { PokedexPage } from "../pages/pokedexPage";
import { goToHomePage , goToPokedexPage } from "../routes/coordinator";

export const HeaderHome = () => {
    const history = useHistory();
    return(
        <Conteiner>
            <Button onClick={() => goToPokedexPage(history)}>Pokedex</Button>
            <Titulo>Home    .</Titulo>
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

const Button = styled.button`
    padding: 5px 5px 5px 5px;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: #fff;
    background-color: #393332;
    border: none;
    border-radius: 15px;
    box-shadow: 0 2px #999;
    :focus {
    color: white;
    background-color: black;
    }

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