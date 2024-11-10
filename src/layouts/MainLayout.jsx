import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div className='container mx-auto bg-pink-50 min-h-screen flex flex-col'>
            <NavBar/>
           <div className="flex-grow">
             <Outlet/>
           </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;