import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

const client = axios.create({ baseURL: import.meta.env.VITE_API_URL });

const useFetch = ({ url }: { url: string }) => {
  const [data, setData] = useState<AxiosResponse>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<AxiosError>();

  const fetchData = async () => {
    try {
      const response = await client.get(url);
      setData(response.data);
    } catch (error: any) {
      setError(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetch;
