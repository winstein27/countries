import { useState } from "react";
import { MdSearch } from "react-icons/md";

import useTheme from "../hooks/useTheme";

import styles from "./Countries.module.css";

import CountriesList from "../components/countries/CountriesList";

const Countries = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const { theme } = useTheme();

  return (
    <>
      <div className={`${styles.filters} ${styles[theme]}`}>
        <MdSearch />
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a country..."
        />
        <select
          name="region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <CountriesList searchFilter={search} regionFilter={region} />
    </>
  );
};

export default Countries;
