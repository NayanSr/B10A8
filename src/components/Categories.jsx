/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div>
      <Link>All Products</Link>
      {categories.map((category) => (
        <div key={category.id}>
          <Link to={`/products/${category.category}`}>{category.category}</Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
