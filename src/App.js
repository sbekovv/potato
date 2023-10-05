import React, {useState} from 'react';
import "./App.css"
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Lays from "../src/image/Lays.png"
import Lays2 from "../src/image/Lays2.png"
import SeeOur from "./components/seeOur/SeeOur";
import Product from "./components/product/Product";
import Potato from "./components/potato/Potato";
import World from "./components/world/World";
import Join from "./components/join/Join";
import Footer from "./components/footer/Footer";

function App() {
    const [image, setImage] = useState(Lays);


    const handleNext = () => {
        if (image === Lays){
            setImage(Lays2)
        } else if (image === Lays2){
            setImage(Lays)
        } else {
            setImage(Lays)
        }
    }


    return (
        <div>
          <Header/>
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
            <World/>
            <Join/>
            <Footer/>
        </div>
    );
}

export default App;