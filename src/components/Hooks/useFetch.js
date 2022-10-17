import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          console.log(response);
          throw new Error("There has been an error processing your request");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [url]);
  return [data, error, isLoading];
};
export default useFetch;
