import useFetch from "../../hooks/useFetch";
import CountryCard from "./CountryCard";

import Country from "./types/Country";

import styles from "./CountriesList.module.css";

const createCountry = (data: any) => {
  const country = {} as Country;

  country.flag = { alt: data.flags.alt, url: data.flags.png };
  country.name = data.name.common;
  country.population = data.population;
  country.region = data.region;
  country.capital = data.capital ? data.capital[0] : "Not informed.";

  return country;
};

const CountriesList = () => {
  const { data, isLoading, error } = useFetch({ url: "/all" });

  if (isLoading) return <h2>Countries List</h2>;

  return (
    <ul className={styles.list}>
      {data.map((country, index) => (
        <li key={index}>
          <CountryCard country={createCountry(country)} />
        </li>
      ))}
    </ul>
  );
};

export default CountriesList;
