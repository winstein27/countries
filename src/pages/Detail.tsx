import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

import styles from "./Detail.module.css";

import useFetch from "../hooks/useFetch";
import useTheme from "../hooks/useTheme";

import CountryComplete from "../types/CountryComplete";
import ResponseCountry from "../types/ResponseCountry";

import CountryInfo from "../components/detail/CountryInfo";

const prepareCountry = (data: ResponseCountry) => {
  const country = {} as CountryComplete;

  country.name = data.name.common;

  const nativeName = data.name.nativeName;
  country.nativeName = nativeName
    ? nativeName[Object.keys(nativeName)[0]].common
    : "Not informed.";

  country.population = data.population;
  country.region = data.region;
  country.subRegion = data.subregion || "Not informed.";
  country.capital = data?.capital ? data.capital[0] : "Not informed.";
  country.flag = { alt: data.flags.alt, url: data.flags.png };
  country.domain = data.tld;

  country.currencies = data.currencies
    ? Object.values(data.currencies).reduce((prev: string[], current) => {
        prev.push(current.name);
        return prev;
      }, [] as string[])
    : ["Not informed."];

  country.languages = data.languages
    ? Object.values(data.languages)
    : ["Not informed."];
  country.borderCountries = data.borders || [];

  return country;
};

const Detail = () => {
  const [name, setName] = useState<string | undefined>();
  const params = useParams();

  const { theme } = useTheme();

  const { data, isLoading, error, sendRequest } = useFetch<ResponseCountry[]>();

  useEffect(() => {
    setName(params.name);
  }, [params]);

  useEffect(() => {
    if (name) sendRequest(`name/${name}?fullText=true`);
  }, [name]);

  if (isLoading) return <h2>Loading...</h2>;

  if (!data || error) return <h2>Something went wrong!</h2>;

  const country = prepareCountry(data[0]);

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <Link to="/" className={styles.button}>
        <MdKeyboardBackspace /> Back
      </Link>
      <CountryInfo country={country} />
    </div>
  );
};

export default Detail;
