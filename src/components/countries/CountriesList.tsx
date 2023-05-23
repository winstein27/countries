import useFetch from "../../hooks/useFetch";

const CountriesList = () => {
  const { data, isLoading, error } = useFetch({ url: "/all" });

  if (!isLoading) console.log(data);
  if (error) console.log(error);

  return <h2>Countries List</h2>;
};

export default CountriesList;
