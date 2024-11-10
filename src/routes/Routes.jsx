import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home />, loader:()=>fetch('../categories.json'),
         children: [
          {path:'/', element:<Products/>, loader: () => fetch('../products.json')},
          {path: '/products/:id', element: <Products/>, loader: () => fetch('../products.json')},
          
        ]
      },
    // {path:'/products', element: <p>HOME</p>},
    {path:'/productDetail/:id', element:<ProductDetails/>},
    {path:'/dashboard', element: <p>DASHbOARD</p>},
    {path:'/aboutus', element: <p>About Us</p>},
  

    ],
  },
]);

export default routes;
