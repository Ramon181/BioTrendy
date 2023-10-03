import { Route, Routes } from "react-router-dom";
import NavBar from "../../componets/client/navBar/NavBar";
import SideBar from "../../componets/client/sideBar/SideBar";
import Home from "../../routes/client/home/Home";
import Footer from "../../componets/client/footer/Footer";
import Products from "../../routes/client/products/products";
import Product from "../../routes/client/product/Product";

const Client = () => {
  return (
    <div>
        <NavBar/>
        <SideBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/products/product/:id" element={<Product/>}/>
        </Routes>
        <Footer/>
    </div>
  );
};

export default Client;
