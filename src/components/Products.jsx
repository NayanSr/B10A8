import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Products = () => {  const [products, setProducts] = useState([]);
  const param = useParams();
  const dynamicId = param.id;
  const allProducts = useLoaderData();
//   setProducts(allProducts);
  useEffect(() => {
    if (dynamicId) {
      const catagorizedProducts = allProducts.filter(
        (pd) => pd.category === dynamicId
      );
      setProducts(catagorizedProducts);
    } else {
      setProducts(allProducts);
    }
  }, [dynamicId]);


//   console.log(dynamicId);

  return (
    <div className=" bg-teal-200 p-4">
      <h2>Products :</h2>
      {products.length ? (
        <>
          {" "}
          {products.map((product) => (
            <h2 key={product.product_id}>{product.price}</h2>
          ))}
        </>
      ) : (
        <h2 className="p-6">No Products for: <span className= "p-2 rounded-full text-red-600 bg-teal-300">{dynamicId}</span>  </h2>
      )}
    </div>
  );
};

export default Products;
