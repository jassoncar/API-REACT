import { useState } from "react";

const useFilters = () => {
  const [filterValues, setFilterValues] = useState({
    name: "",
    country: "",
    email: "",
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterValues({
      ...filterValues,
      [name]: value,
    });
  };

  const handleFilterSubmit = (users) => {
    return users.filter((user) => {
      const nameMatch = user.name.first.toLowerCase().includes(filterValues.name.toLowerCase()) ||
                        user.name.last.toLowerCase().includes(filterValues.name.toLowerCase());
      const countryMatch = user.location.country.toLowerCase().includes(filterValues.country.toLowerCase());
      const emailMatch = user.email.toLowerCase().includes(filterValues.email.toLowerCase());

      return nameMatch && countryMatch && emailMatch;
    });
  };

  return { filterValues, handleFilterChange, handleFilterSubmit };
};

export default useFilters;
