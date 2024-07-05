import { useState } from "react";

const useFilters = () => {
  const [filterValues, setFilterValues] = useState({});

  const handleFilterChange = (event) => {
    setFilterValues({
      ...filterValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleFilterSubmit = () => {
    // Implementar lógica de filtrado aquí
  };

  return { filterValues, handleFilterChange, handleFilterSubmit };
};

export default useFilters;
