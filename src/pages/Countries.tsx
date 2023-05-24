import { useState } from "react";
import { MdSearch } from "react-icons/md";

import styles from "./Countries.module.css";

import CountriesList from "../components/countries/CountriesList";

const Countries = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className={styles.filters}>
        <MdSearch />
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a country..."
        />
      </div>
      <CountriesList searchFilter={search} />
    </>
  );
};

export default Countries;
