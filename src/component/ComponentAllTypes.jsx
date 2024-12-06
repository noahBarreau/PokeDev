import React from "react";
import { Link } from "react-router-dom";
import useAllTypes from "../Hook/useAllTypes";
import "../css/style.css";

const AllTypes = () => {
  const { types, isError } = useAllTypes();

  if (isError) {
    return <p>Il y a eu une erreur de chargement. Veuillez rafraichir la page</p>;
  }

  return (
    <section className="pokemon-container">
      {types?.map((type) => {
        return (
          <Link to={`/AllPokemonByTypes?type=${type.name}`} key={type.id}>
            <article className="pokemon-card">
              <div className="pokemon-header">
                <p className="pokemon-name">{type.name}</p>
              </div>
              <img className="pokemon-image" src={type.image} alt={type.name} />
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default AllTypes;
