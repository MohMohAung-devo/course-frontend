import { useEffect, useState } from "react";

const usePopularFetch = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isStatus, setIsStatus] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("http://localhost:3000/api/courseAll");
        if (!result.ok) {
          // throw new Error(`http error: ${result.message}`);
          setIsStatus(result.status);
        }

        const data = await result.json();
        setBlogs(data);
        setIsError(null);
      } catch (err) {
        setIsError(err.message);
      } finally {
        setIsPending(false);
      }
    };
    fetchData();
  }, []);

  return { blogs, isError, isPending, isStatus };
};

export default usePopularFetch;
