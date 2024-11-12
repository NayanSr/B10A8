/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div>
      <Link className="font-semibold">All Products</Link>
      {categories.map((category) => (
        <div className="mt-4" key={category.id}>
          <NavLink className={({ isActive }) =>
            ` font-semibold ${isActive ? 'bg-slate-400 p-2 rounded-3xl' : ''}`
          }  to={`/products/${category.category}`}>{category.category}</NavLink>
        </div>
      ))}
    </div>
  );
};

export default Categories;
