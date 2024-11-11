import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";
import Banner from "../components/Banner";
import NavBarText from "../components/NavBarText";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div>
      <NavBarText/>
      <div className=" absolute left-1/4 top-3/4 w-1/2  p-3 h-64 bg-purple-300 rounded-2xl">
        <Banner />
      </div>
      <h2 className="text-2xl font-semibold text-center">
        Explore Cutting-Edge Gadgets
      </h2>

      <div className="flex gap-4 p-8">
        <div className=" w-96">
          <Categories categories={categories} />
        </div>

        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
