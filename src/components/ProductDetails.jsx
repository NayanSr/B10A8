import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const productId= useParams();
    console.log(productId.id);
    return (
        <div>
            {productId.id}
        </div>
    );
};

export default ProductDetails;