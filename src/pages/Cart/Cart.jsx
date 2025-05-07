import React from "react";
import useTotalEnrollCourse from "../../hook/api/useTotalEnrolledCourse";

const Cart = () => {
  const { isPending, error, enrolledCourseAll } = useTotalEnrollCourse();

  console.log("enrolledCourse", enrolledCourseAll);
  return (
    <div className="max-w-7xl mx-auto p-3">
      <div className="mt-10">
        <h1 className="text-center text-2xl">
          Total Enrolled Course{" "}
          <span>{enrolledCourseAll?.courses?.length}</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 space-x-3 mt-11">
          {enrolledCourseAll?.courses?.map((course) => (
            <div
              key={course._id}
              className="border p-4 rounded-lg shadow space-y-2"
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1681248156496-550d1ad34c65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="rounded-lg"
              />
              <h2 className="text-xl font-semibold">
                {course.courseId?.title || "No title"}
              </h2>
              <p>
                Instructor: {course.courseId?.instructor?.name || "Unknown"}
              </p>
              <p>Price: ${course.courseId?.price || 0}</p>
              <p>Start Date: {course.courseId?.startDate || "Not specified"}</p>
              <p>End Date: {course.courseId?.endDate || "Not specified"}</p>
              <p className="text-sm text-gray-500">
                Enrolled on: {new Date(course.enrolledAt).toString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
