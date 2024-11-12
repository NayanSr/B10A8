    // import { useEffect, useState } from "react";
    // import { getFromLs } from "../utils";
    // import { Link, useLoaderData } from "react-router-dom";
    // import DashboardCart from "./DashboardCart";

    // const Dashboard = () => {
    // const [matchedProducts, setMatchedProducts] = useState([]);
    // const [actived, setActived]= useState(true)
    // const products = useLoaderData();
    
    // const storedCartIds = getFromLs("cart");
    // const storedFavouritIds = getFromLs("favourit");
    // console.log('cart:', storedCartIds, 'fav:', storedFavouritIds);

    // const handleFavouritActived =()=>{
    //     setActived(false)
    // }
    // const handleCartActived =()=>{
    //     setActived(true)
    // }
    // const filteredCartProducts = products.filter((product) =>storedCartIds.includes(product.product_id));
    // const filteredFavourittProducts = products.filter((product) =>storedFavouritIds.includes(product.product_id));
    
    // useEffect(() => {
    //     if(actived){setMatchedProducts(filteredCartProducts)}
    //     else{setMatchedProducts(filteredFavourittProducts)}
    //     console.log(storedCartIds, filteredCartProducts);
    // }, [actived, storedCartIds,storedFavouritIds]);
    // //   }, [storedCartIds]);

    // return (
    //     <div className="">
    //     <div className="bg-purple-800 rounded-b-2xl text-white text-center">
    //         <h2 className="text-4xl font-semibold">Dashboard</h2>
    //         <p className="py-4">
    //         Explore the latest gadgets that will take your experience to the next
    //         level. From smart devices to <br /> the coolest accessories, we have
    //         it all!
    //         </p>
    //         {/* <button onClick={()=>handleGetFromLs("cart")} className="border-2 border-white rounded-full px-4 py-2 mr-6">Cart</button> */}
    //         <button className="border-2 border-white rounded-full px-4 py-2 mr-6">
    //         <Link onClick={handleCartActived} >Cart</Link>
    //         </button>
    //         <button onClick={handleFavouritActived} className="border-2 border-white rounded-full px-4 py-2 mb-4">
    //         Wishlist
    //         </button>
    //     </div>
    //     <div className="w-1/2 mx-auto bg-gray-100">

    //     {actived? <p>hellow</p>:<h2>galo</h2>}

    //         {matchedProducts.map((pd) => (
    //         <DashboardCart key={pd.product_id} pd={pd} />
    //         ))}

    //     </div>
    //     </div>
    // );
    // };

    // export default Dashboard;


    import { useEffect, useState } from "react";
import { getFromLs } from "../utils";
import DashboardCart from "./DashboardCart";
import { useLoaderData } from "react-router-dom";
import DashboardFavourit from "./DashboardFavourit";

const Dashboard = () => {
  const [matchedProducts, setMatchedProducts] = useState([]);
  const [actived, setActived] = useState(true);
  const products = useLoaderData();

    const storedCartIds = getFromLs("cart");
    const storedFavouritIds = getFromLs("favourit");

  useEffect(() => {
    const filteredCartProducts = products.filter((product) =>storedCartIds.includes(product.product_id));
    const filteredFavourittProducts = products.filter((product) =>storedFavouritIds.includes(product.product_id));

    // Update matchedProducts based on actived state
    setMatchedProducts(actived ? filteredCartProducts : filteredFavourittProducts);
  }, [actived, matchedProducts]);



  // Handlers for switching between cart and wishlist
  const handleFavouritActived = () => setActived(false);
  const handleCartActived = () => setActived(true);

  return (
    <div>
      <div className="bg-purple-800 rounded-b-2xl text-white text-center">
        <h2 className="text-4xl font-semibold">Dashboard</h2>
        <p className="py-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        
        <button onClick={handleCartActived} className="border-2 border-white rounded-full px-4 py-2 mr-6">
          Cart
        </button>
        <button onClick={handleFavouritActived} className="border-2 border-white rounded-full px-4 py-2 mb-4">
          Wishlist
        </button>
      </div>

      <div className="w-1/2 mx-auto bg-gray-100">
        {actived ? <p className="text-xl font-semibold">Cart Products:</p> : <h2 className="text-xl font-semibold">Wishlist Products:</h2>}

        {matchedProducts.map((pd) => (
          actived? <DashboardCart key={pd.product_id} pd={pd} /> : <DashboardFavourit key={pd.product_id} pd={pd}/>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
