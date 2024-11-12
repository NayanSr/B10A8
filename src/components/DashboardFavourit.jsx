/* eslint-disable react/prop-types */
import { removeFromLs } from "../utils";

const DashboardFavourit = ({pd}) => {

    const handleRemoveItem=(id, param2)=>{
        removeFromLs(id, param2);
        console.log(id);
    }

    return (
        <div className="my-4 bg-white rounded-2xl flex justify-between items-center p-4">
        <div className="flex gap-4 mr-20 pr-12">
            <img className="w-20 h-20" src={pd.product_image} alt="" />
            <div>
                <h3 className="font-semibold text-2xl">{pd.product_title}</h3>
                <p className="my-2">{pd.description}</p>
                <h4 className="font-semibold text-xl">Price: {pd.price}</h4>
            </div>
        </div>
        <button onClick={()=>handleRemoveItem(pd.product_id, 'favourit')}>
        <img className="w-[32px] h-[26px] text-red-700" src="https://img.icons8.com/?size=100&id=3062&format=png&color=000000" alt="" />
        </button>
    </div>
    );
};

export default DashboardFavourit;