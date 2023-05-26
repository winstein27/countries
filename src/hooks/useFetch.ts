import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

const client = axios.create({ baseURL: import.meta.env.VITE_API_URL });

const useFetch = <ResponseType>({ url }: { url: string }) => {
  const [data, setData] = useState<ResponseType>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<AxiosError>();

  const fetchData = async () => {
    try {
      const response = await client.get(url);
      setData(response.data as ResponseType);
    } catch (error) {
      setError(error as AxiosError);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetch;
