// src/components/PokemonTypes.js
import React from "react";
import { Link } from 'react-router-dom';
import useRandomTypes from '../Hook/useRandomTypes'; // Importation du hook personnalisé
import '../css/style.css';

const RandomTypes = () => {
  // Utilisation du hook personnalisé
  const { types, isError, listId } = useRandomTypes();

  if (isError) {
    return <p>Il y a eu une erreur de chargement. Veuillez rafraîchir la page</p>;
  }

  return (
    <section className="pokemon-container">
      {types?.map((type) => {
        if (listId.includes(type.id)) {
          return (
            <Link key={type.id} to={`/AllPokemonByTypes?type=${type.name}`}>
              <article className="pokemon-card">
                <div className="pokemon-header">
                  <p className="pokemon-name">{type.name}</p>
                </div>
                <img className="pokemon-image" src={type.image} alt={type.name} />
              </article>
            </Link>
          );
        }
        return null; // Retourner null si le type n'est pas dans la liste des ID aléatoires
      })}
    </section>
  );
};

export default RandomTypes;
