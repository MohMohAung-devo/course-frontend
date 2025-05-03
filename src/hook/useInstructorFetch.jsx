import { useEffect, useState } from "react";

const useInstructorFetch = () => {
  const [instructor, setInstructor] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("http://localhost:3000/api/instructorAll");
        if (!result.ok) {
          throw new Error(`http error: ${result.status}`);
        }

        const data = await result.json();
        setInstructor(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setPending(false);
      }
    };
    fetchData();
  }, []);

  return { instructor, error, pending };
};

export default useInstructorFetch;
