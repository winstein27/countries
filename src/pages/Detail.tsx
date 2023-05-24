import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import useFetch from "../hooks/useFetch";

import Country from "../components/detail/types/Country";

const prepareCountry = (data: any) => {
  const country = {} as Country;

  country.name = data.name.common;
  country.population = data.population;
  country.region = data.region;
  country.subRegion = data.subregion;
  country.capital = data?.capital ? data.capital[0] : "Not informed.";
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

  console.log(data[0]);
  console.log(prepareCountry(data[0]));

  return <h1>Country detail: {name}</h1>;
};

export default Detail;
