import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";

const Products = () => {  
  const [products, setProducts] = useState([]);
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

  const handleSorted= () =>{
    const sorted = products.sort((a,b)=> b.price-a.price);
    setProducts(sorted);
  }

//   console.log(dynamicId);

  return (
    <div className=" bg-teal-200 p-4">
     <div className="flex justify-between items-center p-4">
     <h2 className="text-2xl">Products :</h2>
     <button onClick={handleSorted} className=" bg-slate-500 px-4 py-2 rounded-2xl mr-8">Short by Price</button>
     </div>
<div className="grid grid-cols-3 gap-4 w-full">
{products.length ? (
        <>
          {" "}
          {products.map((product) => (
           <Product product={product} key={product.product_id}/>
          ))}
        </>
      ) : (
        <h2 className="p-6">No Products for: <span className= "p-2 rounded-full text-red-600 bg-teal-300">{dynamicId}</span>  </h2>
      )}
</div>

      
    </div>
  );
};

export default Products;
