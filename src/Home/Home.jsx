import Hero from "./Hero/Hero";
import PopularClasses from "./Popular/PopularClasses";
import useFetch from "../hook/useFetch";

const Home = () => {
  const { blogs: datas, isError, isPending } = useFetch();

  console.log(datas);

  return (
    <div className="relative">
      <Hero />
      <PopularClasses datas={datas} isError={isError} isPending={isPending} />
    </div>
  );
};

export default Home;
