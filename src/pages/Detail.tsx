import { useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

import styles from "./Detail.module.css";

import useFetch from "../hooks/useFetch";

import Country from "../components/detail/types/Country";

import CountryInfo from "../components/detail/CountryInfo";

const prepareCountry = (data: any) => {
  const country = {} as Country;

  country.name = data.name.common;

  const nativeName = data.name.nativeName;
  country.nativeName = nativeName[Object.keys(nativeName)[0]].common;

  country.population = data.population;
  country.region = data.region;
  country.subRegion = data.subregion;
  country.capital = data?.capital ? data.capital[0] : "Not informed.";
  country.flag = { alt: data.flags.alt, url: data.flags.png };
  country.domain = data.tld;

  country.currencies = Object.values(data.currencies).reduce(
    (prev, current) => {
      prev.push(current.name);
      return prev;
    },
    [] as string[]
  );

  country.languages = Object.values(data.languages);
  country.borderCountries = data.borders;

  return country;
};

const Detail = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");

  useEffect(() => {
    if (!name) navigate("/");
  }, []);

  const { data, isLoading, error } = useFetch({
    url: `name/${name}?fullText=true`,
  });

  if (isLoading) return <h2>Loading...</h2>;

  if (!data || error) return <h2>Something went wrong!</h2>;

  const country = prepareCountry(data[0]);

  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <MdKeyboardBackspace />
        <Link to="/">Back</Link>
      </div>
      <CountryInfo country={country} />
    </div>
  );
};

export default Detail;
