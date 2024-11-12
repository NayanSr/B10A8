import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";
import Dashboard from "../components/Dashboard";
import AboutUs from "../components/AboutUs";
import ErrorPage from "../components/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage/> ,
    children: [
      { path: "/", element: <Home />, loader:()=>fetch('../categories.json'),
         children: [
          {path:'/', element:<Products/>, loader: () => fetch('../products.json')},
          {path: '/products/:id', element: <Products/>, loader: () => fetch('../products.json')},
          
        ]
      },
      {path:'productDetail/:id', element: <ProductDetails/>, loader: () => fetch('/products.json')},
      {path:'/dashboard', element: <Dashboard/>,loader: () => fetch('/products.json')},
  
    
    {path:'/aboutus', element: <AboutUs/>},
  

    ],
  },
]);

export default routes;


/* 

{
    "product_id": 8,
    "product_title": "Samsung Galaxy S21",
    "product_image": "https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Samsung/Smartphone/S21/s21-800x800.jpg",
    "category": "Phone",
    "price": 699,
    "description": "Samsung Galaxy S21 with Exynos 2100, 8GB RAM, and 128GB storage.",
    "specification": [
        "Processor: Exynos 2100",
        "RAM: 8GB",
        "Storage: 128GB",
        "Display: 6.2-inch Dynamic AMOLED 2X",
        "Battery Life: Up to 18 hours"
    ],
    "availability": false,
    "rating": 4.6
}

*/