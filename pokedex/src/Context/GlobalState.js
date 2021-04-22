import React from 'react';
import GlobalContextState from './GlobalContextState';


const GlobalState = (props) =>{
    
    const bola = {
        nome: "testeeeeeeeeeee"
    }

    return(
        <GlobalContextState.Provider value={bola}>
            {props.children}
        </GlobalContextState.Provider>
    )
}


export default GlobalState;