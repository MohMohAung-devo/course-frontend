import React from "react";
import { useParams } from "react-router-dom";
import useCourseDetail from "../../../../hook/api/useCourseDetail";

const ClassesDetail = () => {
  const { courseId } = useParams();
  const { error, isPending, courseDetail } = useCourseDetail(courseId);

  if (!courseDetail) return <div>No course detail.....</div>;
  if (error) return <div>Error....</div>;
  if (isPending) return <div>Pending...</div>;
  console.log("courseDetail", courseDetail);
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 flex ">
      <div className="max-w-7xl mx-auto   mt-12">
        {" "}
        <h1 className=" text-2xl font-bold mb-7 text-center">
          {courseDetail?.title}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full max-w-lg rounded-lg mx-auto shadow-md object-cover h-64 sm:80 md:h-96"
            />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 space-y-3">
            <div className="flex gap-4 w-full justify-start">
              <p className="w-40 min-w-[160px]">Instructor:</p>
              <span>{courseDetail?.instructor}</span>
            </div>
            <div className="flex gap-4 w-full justify-start">
              <p className="w-40 min-w-[160px] ">Price:</p>
              <span> $ {courseDetail?.price}</span>
            </div>
            <div className="flex gap-4 w-full justify-start">
              <p className="w-40 min-w-[160px]">TotalStudent:</p>
              <sapn>{courseDetail?.totalStudent}</sapn>
            </div>
            <div className="flex gap-4 w-full justify-start">
              <p className="w-40 min-w-[160px]">ReceiveStudent: </p>
              <span>{courseDetail?.receivedStudent}</span>
            </div>
            <div className="flex gap-4 w-full justify-start">
              <p className="w-40 min-w-[160px]">AvailableSetas: </p>
              <span>{courseDetail?.availableSeats}</span>
            </div>
            <div className="flex gap-4 w-full justify-start">
              <p className="w-40 min-w-[160px]">StartDate: </p>
              <span>{courseDetail?.startDate}</span>
            </div>
            <div className="flex gap-4 w-full justify-start">
              <p className="w-40 min-w-[160px]">EndDate: </p>
              <span>{courseDetail?.endDate}</span>
            </div>
            <div className="flex gap-4 w-full justify-start ">
              <p className="w-40 min-w-[160px]">Description:</p>
              <span className="flex-1 whitespace-pre-line">
                {" "}
                {courseDetail?.description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesDetail;
