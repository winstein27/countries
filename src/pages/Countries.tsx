import { useState } from "react";

import CountriesList from "../components/countries/CountriesList";

const Countries = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <CountriesList searchFilter={search} />
    </>
  );
};

export default Countries;
