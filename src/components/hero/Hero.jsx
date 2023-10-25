import React from 'react';
import "./Hero.jsx.css"
import Fragme from "../../image/fragme img.png"
import Line from "../../image/line.png"
import Point from "../../image/point.png"
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";


function Hero() {
    const {t} = useTranslation()

    return (
        <div className="hero">
            <div className="container">
                <h1 className="heroText">{t("Testy Chips")}</h1>
                <div className="hero-box">
                    <div>
                        <img src={Fragme} alt="img"/>
                    </div>
                    <div className="hero-line">
                        <img src={Line} alt="line"/>
                    </div>
                </div>
                <div className="hero-btn">
                    <Link to="/shop"><button>{t("Shop")} <ion-icon name="arrow-forward-outline"></ion-icon></button></Link>
                </div>
                <div className="hero-box">
                    <div>
                        <img src={Point} alt="img"/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Hero;