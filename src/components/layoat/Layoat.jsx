import React, {useState} from 'react';
import Header from "./header/Header";
import {Route, Routes} from "react-router-dom";
import Shop from "../shop/Shop";
import Contact from "../contact/Contact";
import Footer from "./footer/Footer";
import SeeOur from "../seeOur/SeeOur";
import Product from "../product/Product";
import Potato from "../potato/Potato";
import World from "../world/World";
import Join from "../join/Join";
import Lays from "../../image/Lays.png";
import Lays2 from "../../image/Lays2.png";
import Hero from "../hero/Hero";
import Auth from "../auth/Auth";
import Cart from "../cart/cart";
import ProductDetail from "../productDetail/productDetail";
import Lets from "../lets/Lets";

const Root = () => {
    const [image, setImage] = useState(Lays);
    const [isVisible, setIsVisible] = useState(false);

    const changeVisible = () => {
        setIsVisible(true)
    }


    const handleNext = () => {
        if (image === Lays){
            setImage(Lays2)
        } else if (image === Lays2){
            setImage(Lays)
        } else {
            setImage(Lays)
        }
    }

    return(
        <div>
            <hr/>
            <Hero/>
            <div className="container">
                <center><img className="hero-lays" src={image} alt="img-lays"/></center>
                <span className="hero-lays-arrow">
                    <ion-icon name="arrow-back-outline" onClick={handleNext}></ion-icon>
                    <ion-icon name="arrow-forward-outline" onClick={handleNext}></ion-icon>
                </span>
            </div>
            <SeeOur/>
            <Product/>
            <Potato/>
            <World changeVisible={changeVisible}/>
            {isVisible && <Auth setIsVisible={setIsVisible}/>}
            <Join/>
        </div>
    )
}

function Layoat() {
    return (
        <div>
            <div>
                <Header/>
                <Routes>
                    <Route path="/" element={<Root/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/product/:id" element={<ProductDetail/>}/>
                    <Route path="/lets" element={<Lets/>}/>
                </Routes>
                <Footer/>
            </div>
        </div>
    );
}

export default Layoat;