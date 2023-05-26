interface Country {
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subRegion: string;
  capital: string;
  flag: { alt: string; url: string };
  domain: string[];
  currencies: string[];
  languages: string;
  borderCountries: string;
}

export default Country;
