import { useEffect, useState } from "react";

const useCourseDetail = (courseId) => {
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(null);
  const [courseDetail, setCourseDetail] = useState(null);
  useEffect(() => {
    const courseDetail = async () => {
      setIsPending(true);
      try {
        const result = await fetch(
          `http://localhost:3000/api/courseDetails/${courseId}`
        );
        if (!result.ok) {
          throw Error("Error");
        }

        const data = await result.json();
        setCourseDetail(data.data);
        setIsPending(false);
      } catch (err) {
        console.log(err);
        setCourseDetail(null);
      }
    };
    if (courseId) {
      courseDetail();
    } else {
      setError("Invalid user id");
    }
  }, [courseId]);

  return { error, isPending, courseDetail };
};

export default useCourseDetail;
