import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {

    const products= useLoaderData();
    const productId= useParams();
    const targetProduct= products.find(pd=>pd.product_id==productId.id)

    console.log(productId.id, products, targetProduct);
    return (
        <div className="">
            <div className="bg-purple-800 rounded-b-2xl text-white text-center">
                <h2 className="text-4xl font-semibold">Product Details</h2>
                <p className="py-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
            <div className="w-1/2 mx-auto bg-gray-100">
                  pD {targetProduct.price}
            </div>
        </div>
    );
};

export default ProductDetails;