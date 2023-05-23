import Country from "./types/Country";

import styles from "./CountryCard.module.css";

interface Props {
  country: Country;
}

const CountryCard = ({ country }: Props) => {
  return (
    <div className={styles.card}>
      <img
        src={country.flag.url}
        alt={country.flag.alt}
        className={styles.flag}
      />
      <div className={styles.info}>
        <h2>{country.name}</h2>
        <p>
          <b>Population:</b>{" "}
          {new Intl.NumberFormat().format(country.population)}
        </p>
        <p>
          <b>Region:</b> {country.region}
        </p>
        <p>
          <b>Capital:</b> {country.capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
