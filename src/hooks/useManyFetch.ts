import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

const client = axios.create({ baseURL: import.meta.env.VITE_API_URL });

const useManyFetch = <ResponseType>({ urls }: { urls: string[] }) => {
  const [data, setData] = useState<ResponseType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<AxiosError>();

  const fetchData = async () => {
    try {
      await Promise.all(
        urls.map(async (url) => {
          const response = await client.get(url);
          setData((prevData) => {
            prevData.push(response.data as ResponseType);
            return prevData;
          });
        })
      );
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

export default useManyFetch;
