import React from "react"
import { useHistory } from "react-router-dom";

export const DetalhesPage = () => {
const history = useHistory();
    return(
    <div>
        <p>Detalhes</p>
        <button onClick={history.goBack}>voltar</button>
    </div>
    )
} 