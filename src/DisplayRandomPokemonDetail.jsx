import Header from "./Header";
import AllPokemons from "./AllPokemons";
import PokemonById from "./PokemonById";
import { useLocation } from "react-router-dom";

import './css/style.css';

function DisplayRandomPokemonDetail() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = Math.floor(Math.random() * 838) + 1;

  return (
    <>
      <Header />
      
      <PokemonById id={id}/>
    </>
  )
}

export default DisplayRandomPokemonDetail