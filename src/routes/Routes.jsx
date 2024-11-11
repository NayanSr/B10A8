import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";
import Dashboard from "../pages/Dashboard";

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
      {path:'productDetail/:id', element: <ProductDetails/>, loader: () => fetch('/products.json')},
      {path:'/dashboard', element: <Dashboard/>},
  
    
    {path:'/aboutus', element: <p>About Us</p>},
  

    ],
  },
]);

export default routes;
