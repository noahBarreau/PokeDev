import Header from "../Header";
import PokemonByName from "../component/ComponentPokemonByName";
import { useLocation } from "react-router-dom";

import '../css/style.css';

function App() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get('name');

  return (
    <>
      <Header />

      <PokemonByName name ={name}/>
    </>
  );
}

export default App;
