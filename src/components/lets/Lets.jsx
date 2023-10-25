import React from 'react';
import "./Lets.css";
import laysgif from "../../image/laysflavorswap.gif"
import {Link} from "react-router-dom";
import Povar from "../../image/Povorr.png"
import {useTranslation} from "react-i18next";

function Lets() {
    const {t} = useTranslation()
    return (
        <div className="container">
           <div className="lets-block">
               <div className="lets-img">
                   <img src={laysgif} alt="lays-gif"/>
               </div>
               <div className="lets-text">
                   <h1>{t("Fresh Vegetables very Day")}</h1>
                   <p>{t("Healthy life as informed declared we enjoy the margaret. Joy horrible moreover man feelings own shy. Request norland neither mistake for yet. Between the for morning assured country believe.")}</p>
                   <Link to="/"><button>{t("back")}</button></Link>
               </div>
           </div>

            <div className="lets-block">
                <div className="lets-text">
                    <h1>{t("Cooked by the Best Chefs")}</h1>
                    <p>{t("Believing neglected so so allowance existence departure in. In design active temper be uneasy. Thirty for remove plenty regard you summer though. He preference connection astonished on of ye.")}</p>
                     <h4>{t("A guaranteed delicious meal")}</h4>
                     <h4>{t("Food is guaranteed hygienic")}</h4>
                     <h4>{t("Cooked quickly")}</h4>
                </div>
                <div>
                    <img src={Povar} alt="img"/>
                </div>
            </div>
        </div>
    );
}

export default Lets;