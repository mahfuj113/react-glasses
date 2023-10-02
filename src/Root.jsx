import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div className='2xl:container mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Root;