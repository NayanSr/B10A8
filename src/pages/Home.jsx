import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";

const Home = () => {
const categories= useLoaderData();

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex gap-4 p-8">
        <Categories categories={categories} className="w-42" />
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
