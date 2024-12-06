
import Header from "../Header";
import PokemonByTypes from "../component/ComponentPokemonByTypes";
import { useLocation } from "react-router-dom";

import '../css/style.css';

function App() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const type = params.get('type');

  if(type!=undefined){
    return (
      <>
        <Header />
        
        <h1>Tous les Pokémons</h1>
        <PokemonByTypes type={type}/>
      </>
    )
  }else{
    return (
      <>
        <Header />
        
        <h1>Erreur de chargement</h1>
      </>
    )
  }

}

export default App
