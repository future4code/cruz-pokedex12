import React, { useEffect, useState } from "react"
import axios from "axios";
import { UrlBase } from '../Constants/Url';
import GlobalContextState from './GlobalContextState';


const GlobalState = (props) =>{
    const [pokemonsApi, setPokemonsApi] = useState([]) 
    const [pokedex, setPokedex] = useState([])
    const [pagina, setPagina] = useState(0)

    const listaPokemons = async () => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${pagina}&limit=20`);
            setPokemonsApi(response.data.results);
           
        } catch (erro) {
            console.log("Erro", erro);
        }
    }
    
    const botao1 = () => {
        setPagina(0) 
    }

    const botao2 = () => {
        setPagina(20)
    }

    const botao3 = () => {
        setPagina(40)
    }
    
    const botao4 = () => {
        setPagina(60)
    }
    

    const states = { pokemonsApi, pokedex };
    const setters = { setPokemonsApi, setPokedex };
    const requests = { listaPokemons};
    const funcoes = { botao1, botao2, botao3,botao4}

    return(
        <GlobalContextState.Provider value={{states, setters, requests,funcoes}}>
            {props.children}
        </GlobalContextState.Provider>
    )
}


export default GlobalState;

// const [cart, setCart] = useState([]);
//   const [products, setProducts] = useState({});

//   useEffect(() => {
//     getProducts();
//   }, []);

//   const getProducts = () => {
//     axios
//       .get(`${BASE_URL}/products`)
//       .then((res) => {
//         setProducts(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const states = { cart, products };
//   const setters = { setCart, setProducts };
//   const requests = { getProducts };

//   return (
//     <GlobalStateContext.Provider value={{ states, setters, requests }}>
//       {props.children}
//     </GlobalStateContext.Provider>
//   );
// };