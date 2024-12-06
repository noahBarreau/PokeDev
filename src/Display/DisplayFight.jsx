import Header from "../Header";
import AllPokemons from "../AllPokemons";
import PokemonById from "../component/ComponentPokemonById";

import '../css/style.css';

function DisplayFight() {
    return (
      <>
        <Header />
        
        <h1>Tous les Pokémons</h1>
        <PokemonById id={id}/>
      </>
    )
  }

export default DisplayFight
