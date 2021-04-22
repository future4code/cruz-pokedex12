import React, { useEffect, useState } from "react"
import axios from "axios";
import { UrlBase } from '../Constants/Url';
import GlobalContextState from './GlobalContextState';


const GlobalState = (props) =>{
    const [pokemonsApi, setPokemonsApi] = useState([]) 
    const [pokedex, setPokedex] = useState([])

    const listaPokemons = async () => {
        try {
            const response = await axios.get(`${UrlBase}`);
            setPokemonsApi(response.data.results);
        } catch (erro) {
            console.log("Erro", erro);
        }
    }


    const states = { pokemonsApi, pokedex };
    const setters = { setPokemonsApi, setPokedex };
    const requests = { listaPokemons};


    return(
        <GlobalContextState.Provider value={{states, setters, requests}}>
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