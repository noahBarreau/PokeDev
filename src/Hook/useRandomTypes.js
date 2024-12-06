import { useEffect, useState } from "react";

const useRandomTypes = () => {
  const [types, setTypes] = useState(null);
  const [isError, setIsError] = useState(false);
  const listId = [];

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/types")
      .then((response) => response.json())
      .then((data) => {
        setTypes(data);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  for (let i = 0; i < 10; i++) {
    listId.push(Math.floor(Math.random() * 838) + 1);
  }  

  return { types, isError, listId };
};

export default useRandomTypes;
