import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const useEnrolledFetch = () => {
  const [enrolled, setEnrolled] = useState(null);
  const [error, setError] = useState(false);
  const [pending, setIsPending] = useState(false);
  const { token } = useAuth();

  const fetchData = async (userId, courseId) => {
    if (!userId || !courseId) {
      setError("User id or course id is missing");
    }
    setIsPending(true);
    setError(null);
    try {
      const reslut = await fetch("http://localhost:3000/api/enrolledCourse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId, courseId }),
      });
      if (!reslut.ok) {
        throw new Error(`http error : ${reslut.status}`);
      }
      const data = await reslut.json();
      setEnrolled(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { fetchData, enrolled, error, pending };
};

export default useEnrolledFetch;
