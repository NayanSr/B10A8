import { useLoaderData, useParams } from "react-router-dom";
import { addToLs } from "../utils";

const ProductDetails = () => {
  const products = useLoaderData();
  const productId = useParams();
  const targetProduct = products.find((pd) => pd.product_id == productId.id);
  const handleSaveToCart=(dataKey,id)=>{
    console.log(dataKey, id);
    addToLs(id, dataKey)
  }


  // console.log(productId.id, products, targetProduct);
  return (
    <div className="relative">
      <div className="bg-purple-800 rounded-b-2xl text-white text-center pb-48 mb-72">
        <h2 className="text-4xl font-semibold">Product Details</h2>
        <p className="py-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
      </div>
      <div className="absolute left-1/4 top-1/2  w-1/2 mx-auto bg-gray-500 flex gap-4 mt-2 p-4 rounded-2xl">
        <img
          className="w-[250px] h-[280px] my-auto rounded-2xl"
          src={targetProduct.product_image}
          alt=""
        />
        <div>
          <h3 className="text-2xl font-semibold">
            {targetProduct.product_title}
          </h3>
          <h4 className="text-xl font-semibold py-2">
            Pricr: $ {targetProduct.price}
          </h4>
          <button className="font-semibold border-2 border-purple-800 bg-teal-300 px-8 py-2 rounded-full">
            {targetProduct.availability ? "In Stock" : "Not In Stock"}
          </button>
          <p>{targetProduct.description}</p>
          <h5 className="text-lg font-semibold">Specification:</h5>
          <ol className="list-decimal">
            {targetProduct.specification.map((sp, indx) => (
              <li className="ml-8" key={indx}>
                {sp}
              </li>
            ))}
          </ol>
          <div className=" flex items-center mt-4">
            <button onClick={()=>handleSaveToCart('cart', targetProduct.product_id)} className="mr-4 bg-purple-800 px-4 rounded-full">Add to Cart</button>
            <button><img className="w-4" src="https://img.icons8.com/?size=100&id=87&format=png&color=000000" alt="" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
