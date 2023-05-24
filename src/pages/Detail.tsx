import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");

  useEffect(() => {
    if (!name) navigate("/");
  }, []);

  return <h1>Country detail: {name}</h1>;
};

export default Detail;
