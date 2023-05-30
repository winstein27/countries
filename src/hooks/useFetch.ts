import { useState } from "react";
import axios, { AxiosError } from "axios";

const client = axios.create({ baseURL: import.meta.env.VITE_API_URL });

const useFetch = <ResponseType>() => {
  const [data, setData] = useState<ResponseType>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<AxiosError>();

  const fetchData = async (url: string) => {
    setData(undefined);
    setIsLoading(true);

    try {
      const response = await client.get(url);
      setData(response.data as ResponseType);
    } catch (error) {
      setError(error as AxiosError);
    }

    setIsLoading(false);
  };

  return { data, isLoading, error, sendRequest: fetchData };
};

export default useFetch;
