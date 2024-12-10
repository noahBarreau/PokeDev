import Header from "../Header";
import PokemonById from "../component/ComponentPokemonById";
import '../css/style.css';

function DisplayRandomPokemonDetail() {
  const id = Math.floor(Math.random() * 838) + 1;

  return (
    <div className="main-container"> 
      <Header />
      <PokemonById id={id} />
    </div>
  );
}

export default DisplayRandomPokemonDetail;
