import Hero from "./Hero/Hero";
import PopularClasses from "./Popular/PopularClasses";
import usePopularFetch from "../hook/usePopularFetch";
import useInstructorFetch from "../hook/useInstructorFetch";
import Instructor from "./Instructor/Instructor";

const Home = () => {
  const { blogs: datas, isError, isPending } = usePopularFetch();
  const { instructor: data, error, pending } = useInstructorFetch();

  console.log(data);

  return (
    <div className="relative">
      <Hero />
      <PopularClasses datas={datas} isError={isError} isPending={isPending} />
      <Instructor data={data} error={error} pending={pending} />
    </div>
  );
};

export default Home;
