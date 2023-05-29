import { Link } from "react-router-dom";

import useManyFetch from "../../hooks/useManyFetch";

import CountryComplete from "../../types/CountryComplete";
import ResponseCountry from "../../types/ResponseCountry";

import styles from "./CountryInfo.module.css";

interface Props {
  country: CountryComplete;
}

interface Name {
  name: string;
  officialName: string;
}

const getNames = (data: ResponseCountry[][], region: string) => {
  const names = [] as Name[];

  data.forEach((responseCountries) => {
    responseCountries.every((country) => {
      if (country.region === region) {
        names.push({
          name: country.name.common,
          officialName: country.name.official,
        });
        return false;
      }

      return true;
    });
  });

  return [...new Map(names.map((name) => [name["name"], name])).values()];
};

const CountryInfo = ({ country }: Props) => {
  const urls = country.borderCountries.map((country) => "/name/" + country);
  const { data, isLoading, error } = useManyFetch<ResponseCountry[]>({
    urls,
  });

  const borderCountries = getNames(data, country.region);

  if (isLoading) return <h1>Loading...</h1>;

  if (!isLoading && error) <h1>Something went wrong</h1>;

  return (
    <div className={styles.container}>
      <div className={styles.flag}>
        <img src={country.flag.url} alt={country.flag.alt} />
      </div>

      <div className={styles.info}>
        <h2 className={styles.name}>{country.name}</h2>
        <div className={styles.infoGroup}>
          <p>
            <b>Native name:</b> {country.nativeName}
          </p>
          <p>
            <b>Population:</b>{" "}
            {new Intl.NumberFormat().format(country.population)}
          </p>
          <p>
            <b>Region:</b> {country.region}
          </p>
          <p>
            <b>Sub Region:</b> {country.subRegion}
          </p>
          <p>
            <b>Capital:</b> {country.capital}
          </p>
        </div>

        <div className={styles.infoGroup}>
          <p>
            <b>Top Level Domain:</b> {country.domain}
          </p>
          <p>
            <b>Currencies:</b> {country.currencies.join(", ")}
          </p>
          <p>
            <b>Languages:</b> {country.languages.join(", ")}
          </p>
        </div>

        {borderCountries.length !== 0 && (
          <>
            <h2>Border Countries:</h2>
            <div className={styles.borderCountries}>
              {borderCountries.map((country) => (
                <Link
                  to={"/detail/" + country.officialName}
                  className={styles.countryLink}
                >
                  {country.name}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default CountryInfo;
