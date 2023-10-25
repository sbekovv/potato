import React from 'react';
import Lays2 from "../../image/Lays2.png";
import "./World.css";
import {useTranslation} from "react-i18next";

function World({changeVisible}) {
    const {t} = useTranslation()
    return (
        <div className="world">
            <div className="container">
                <div className="world-box">
                    <h1>{t("world class awesome Chips")}</h1>
                    <img src={Lays2} />
                   <div className="world-text">
                       <h4>{t("Overview")}</h4>
                       <p>{t("the blossoms so much that she put them in her hair. Her husband, Louis XVI, put one in his buttonhole, inspiring a brief vogue in which the French.")}</p>
                       <button onClick={changeVisible}>{t("Learn More")}<ion-icon name="arrow-forward-outline"></ion-icon></button>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default World;