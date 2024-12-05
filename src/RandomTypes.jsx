import { useEffect, useState } from "react";


const PokemonTypes = () => {
  const [types, setTypes] = useState(null);
  const [isError, setIsError] = useState(false);
  const listId = [];

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/types")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTypes(data);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  if (isError) {
    return <p>Il y a eu une erreur de chargement. Veuillez rafraichir la page</p>;
  }

  for (var i=0; i < 3; i++) {
    listId.push(Math.floor(Math.random() * (54 - 37 + 1)) + 37);
  }

  return (
    <section className="pokemon-container">
      {types?.map((type) => {
        if(listId.includes(type.id)){
          return (
            <article key={type.id} className="pokemon-card">
              <div className="pokemon-header">
                <p className="pokemon-name">{type.name}</p>
              </div>
              <img className="pokemon-image" src={type.image} alt={type.name} />
            </article>
          );
        }
      })}
    </section>
    
  );
};

export default PokemonTypes;