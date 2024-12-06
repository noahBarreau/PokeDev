import { useEffect, useState } from "react";

const useAllTypes = () => {
  const [types, setTypes] = useState(null);
  const [isError, setIsError] = useState(false);

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

  return { types, isError };
};

export default useAllTypes;
