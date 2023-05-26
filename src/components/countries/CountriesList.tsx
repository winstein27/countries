import { useNavigate } from "react-router-dom";

import useFetch from "../../hooks/useFetch";

import CountryCard from "./CountryCard";

import CountryBasic from "../../types/CountryBasic";
import ResponseCountry from "../../types/ResponseCountry";

import styles from "./CountriesList.module.css";

interface Props {
  searchFilter: string;
  regionFilter: string;
}

const filterCountriesByText = (countries: ResponseCountry[], text: string) => {
  const filterText = text.toLowerCase();
  return countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(filterText) ||
      country.region.toLowerCase().includes(filterText) ||
      (country.capital
        ? country.capital[0].toLowerCase().includes(filterText)
        : false)
  );
};

const createCountry = (data: ResponseCountry) => {
  const country = {} as CountryBasic;

  country.officialName = data.name.official;
  country.flag = { alt: data.flags.alt, url: data.flags.png };
  country.name = data.name.common;
  country.population = data.population;
  country.region = data.region;
  country.capital = data.capital ? data.capital[0] : "Not informed.";

  return country;
};

const CountriesList = (props: Props) => {
  const { data, isLoading, error } = useFetch<ResponseCountry[]>({
    url: "/all",
  });
  const navigate = useNavigate();

  if (isLoading) return <h2>Countries List</h2>;

  if (error || !data) return <h2>Something went wrong</h2>;

  let countriesList = props.searchFilter
    ? filterCountriesByText(data, props.searchFilter)
    : data;

  countriesList = props.regionFilter
    ? countriesList.filter(
        (country) =>
          country.region.toLowerCase() === props.regionFilter.toLowerCase()
      )
    : countriesList;

  const onClickHandler = (officialName: string) => {
    navigate("/detail?name=" + officialName);
  };

  return (
    <ul className={styles.list}>
      {countriesList.map((country, index) => (
        <li key={index}>
          <CountryCard
            country={createCountry(country)}
            onClick={onClickHandler}
          />
        </li>
      ))}
    </ul>
  );
};

export default CountriesList;
