import React from "react";
import { useParams } from "react-router-dom";
import useCourseDetail from "../../../../hook/api/useCourseDetail";

const ClassesDetail = () => {
  const { courseId } = useParams();
  const { error, isPending, courseDetail } = useCourseDetail(courseId);
  //   const isEmpty = !courseDetail || courseDetail.length === 0;

  //   if (!isEmpty) return <div>No data show....</div>;
  if (!courseDetail) return <div>No course detail.....</div>;
  if (error) return <div>Error....</div>;
  if (isPending) return <div>Pending...</div>;
  console.log("courseDetail", courseDetail);
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto flex flex-col text-center mt-12">
        {" "}
        <h1 className=" text-2xl font-bold mb-7">{courseDetail?.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 space-y-5 md:sapce-y-0 lg:sapce-y-0 md:space-x-9 p-5 md:p-0 lg:p-0">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full rounded-lg "
          />
          <div className="flex flex-col items-start space-y-3 text-lg shadow-lg p-3 border rounded-lg">
            <p>Instructor: {courseDetail?.instructor}</p>
            <p>Price: $ {courseDetail?.price}</p>{" "}
            <p>TotalStudent: {courseDetail?.totalStudent}</p>
            <p>ReceiveStudent: {courseDetail?.receivedStudent}</p>
            <p>AvailableSetas: {courseDetail?.availableSeats}</p>
            <p className="text-md ">
              StartDate:{courseDetail?.startDate}{" "}
            </p>{" "}
            <p className="text-md ">EndDate:{courseDetail?.endDate} </p>
            <p className="items-start pr-6">
              Description:
              {courseDetail?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesDetail;
