import Header from "./Header";
import AllPokemons from "./AllPokemons";
import PokemonById from "./PokemonById";
import { useLocation } from "react-router-dom";

import './css/style.css';

function App() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get('id');

  if(id!=undefined){
    return (
      <>
        <Header />
        
        <h1>Tous les Pokémons</h1>
        <PokemonById id={id}/>
      </>
    )
  }else{
    return (
      <>
        <Header />
        
        <h1>Tous les Pokémons</h1>
        <AllPokemons/>
      </>
    )
  }

}

export default App
