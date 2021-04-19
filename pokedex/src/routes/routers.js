import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { HomePage} from "../pages/homePage"
import { PokedexPage } from "../pages/pokedexPage"
import { DetalhesPage } from "../pages/detalhesPage" 

export const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/pokedex">
                    <PokedexPage />
                </Route>
                <Route exact path="/detalhes">
                    <DetalhesPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )

}