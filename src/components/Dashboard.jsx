import { useEffect, useState } from "react";
import { getFromLs } from "../utils";
import { useLoaderData } from "react-router-dom";

const Dashboard = () => {
    const [matchedProducts, setMatchedProducts]= useState([]);
    const products= useLoaderData();
    useEffect(()=>{
        const storedIds = getFromLs("cart");
    const filteredProducts = products.filter(product => storedIds.includes(product.product_id));
   setMatchedProducts(filteredProducts)

    console.log(storedIds, filteredProducts);
    },[])
/* const handleGetFromLs=(dataKet)=>{
    const storedIds = getFromLs("cart");
    const filteredProducts = products.filter(product => storedIds.includes(product.product_id));
   setMatchedProducts(filteredProducts)

    console.log(storedIds, filteredProducts);
} */

    return (
        <div className="">
        <div className="bg-purple-800 rounded-b-2xl text-white text-center">
            <h2 className="text-4xl font-semibold">Dashboard</h2>
            <p className="py-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            {/* <button onClick={()=>handleGetFromLs("cart")} className="border-2 border-white rounded-full px-4 py-2 mr-6">Cart</button> */}
            <button className="border-2 border-white rounded-full px-4 py-2 mr-6">Cart</button>
            <button className="border-2 border-white rounded-full px-4 py-2 mb-4">Wishlist</button>
        </div>
        <div className="w-1/2 mx-auto bg-gray-100">
             {matchedProducts.map(pd=><h2 key={pd.product_id}>{pd.price}</h2>)}
        </div>
    </div>
    );
};

export default Dashboard;