import Hero from "./Hero/Hero";
import PopularClasses from "./Popular/PopularClasses";
import usePopularFetch from "../hook/usePopularFetch";

const Home = () => {
  const { blogs: datas, isError, isPending } = usePopularFetch();

  console.log(datas);

  return (
    <div className="relative">
      <Hero />
      <PopularClasses datas={datas} isError={isError} isPending={isPending} />
    </div>
  );
};

export default Home;
