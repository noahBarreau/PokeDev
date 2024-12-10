import { useEffect, useState } from "react";

const useRandomTypes = () => {
  const [types, setTypes] = useState([]);
  const [randomTypes, setRandomTypes] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/types")
      .then((response) => response.json())
      .then((data) => {
        setTypes(data);

        const shuffled = data.sort(() => 0.5 - Math.random());
        const selectedTypes = shuffled.slice(0, 3);
        setRandomTypes(selectedTypes);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  return { types, randomTypes, isError };
};

export default useRandomTypes;
