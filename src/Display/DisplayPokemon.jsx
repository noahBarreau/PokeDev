import Header from "../Header";
import AllPokemons from "../component/ComponentAllPokemons";
import PokemonById from "../component/ComponentPokemonById";
import { useLocation } from "react-router-dom";

import '../css/style.css';

function DisplayPokemon() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get('id');

  if(id!=undefined){
    return (
      <>
        <Header />
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

export default DisplayPokemon
