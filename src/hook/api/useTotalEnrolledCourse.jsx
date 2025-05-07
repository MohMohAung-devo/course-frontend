import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

const useTotalEnrollCourse = () => {
  const { token, user } = useAuth();
  const [enrolledCourseAll, setEnrolledCourse] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  // console.log("user", user);
  useEffect(() => {
    const totalEnrolledCourse = async () => {
      if (!user?._id || !token) return;
      setIsPending(true);
      try {
        const reslut = await fetch(
          "http://localhost:3000/api/userTotalEnrolledCourese",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ userId: user._id }),
          }
        );

        if (!reslut.ok) {
          throw Error("Error");
        }
        const data = await reslut.json();
        setEnrolledCourse(data || []);
        setIsPending(false);
        setError(null);
      } catch (err) {
        console.log(err, "Error");
        setError(err);
        setEnrolledCourse([]);
      }
    };
    totalEnrolledCourse();
  }, [user?._id, token]);

  return { enrolledCourseAll, error, isPending };
};

export default useTotalEnrollCourse;
