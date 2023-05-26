import CountryBasic from "./CountryBasic";

interface CountryComplete extends CountryBasic {
  nativeName: string;
  subRegion: string;
  domain: string[];
  currencies: string[];
  languages: string[];
  borderCountries: string[];
}

export default CountryComplete;
