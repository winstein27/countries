interface CountryBasic {
  name: string;
  officialName: string;
  flag: { alt: string; url: string };
  population: number;
  region: string;
  capital: string;
}

export default CountryBasic;
