interface ResponseCountry {
  name: {
    common: string;
    official: string;
    nativeName: { [key: string]: { common: string } };
  };
  population: number;
  region: string;
  subregion: string;
  capital?: string[];
  flags: { alt: string; png: string };
  tld: string[];
  currencies: { [key: string]: { name: string } };
  languages: { [key: string]: string };
  borders?: string[];
}

export default ResponseCountry;
