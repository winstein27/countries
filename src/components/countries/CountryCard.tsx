import CountryBasic from "../types/CountryBasic";

import styles from "./CountryCard.module.css";

interface Props {
  country: CountryBasic;
  onClick: (officialName: string) => void;
}

const CountryCard = ({ country, onClick }: Props) => {
  return (
    <div className={styles.card} onClick={() => onClick(country.officialName)}>
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
