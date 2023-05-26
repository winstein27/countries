import CountryComplete from "../../types/CountryComplete";

import styles from "./CountryInfo.module.css";

interface Props {
  country: CountryComplete;
}

const CountryInfo = ({ country }: Props) => {
  return (
    <div className={styles.container}>
      <img
        src={country.flag.url}
        alt={country.flag.alt}
        className={styles.flag}
      />

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

      <div className={styles.infoGroup}>
        <h2>Border Countries:</h2>
        {country.borderCountries}
      </div>
    </div>
  );
};
export default CountryInfo;
