/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";





const Product = ({product}) => {
  const navigate =useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/productDetail/${productId}`);
  };
    return (
        <div className="card bg-base-100  shadow-xl bg-teal-50">
        <figure className="px-10 pt-10">
          <img
            src={product.product_image}
            alt={product.name}
            className="rounded-xl w-52" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product.product_title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <div className="card-actions">
            <button onClick={()=>handleProductClick(product.product_id)}>View Details</button>
          </div>
        </div>
      </div>
    );
};

export default Product;