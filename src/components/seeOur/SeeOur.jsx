import React, {useEffect, useState} from 'react';
import "./SeeOur.css"
import Star from "../../image/star.png"
import {useTranslation} from "react-i18next";


function SeeOur() {
    const {t} = useTranslation()
    const [animatedNumbers, setAnimatedNumbers] = useState({
        Product: 20,
        UpcomingProduct: 40,
        AwesomeProduct: 25
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimatedNumbers(prevState => ({
                Product: prevState.Product + 1,
                UpcomingProduct: prevState.UpcomingProduct + 1,
                AwesomeProduct: prevState.AwesomeProduct + 1,
            }));
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="seeOur">
            <div className="container">
                <div className="seeOur-container">
                    <div className="seeOurBox">
                        <h3 className="seeOurProduct">{animatedNumbers.Product}k <br/>
                            <span>{t("Product")}</span>
                        </h3>
                        <h3>{animatedNumbers.UpcomingProduct}k <br/>
                            <span>{t("Upcoming")}</span>
                            <span>{t("Product")}</span>
                        </h3>
                        <h3>{animatedNumbers.AwesomeProduct}k <br/>
                            <span>{t("Awesome")}</span>
                            <span>{t("Product")}</span>
                        </h3>
                    </div>
                    <div className="seeOur-text">
                        <h1>{t("See our review")}</h1>
                        <img src={Star} />
                        <hr/>
                        <p>{t("Potatoes were introduced to Europe from the Americas by the Spanish in the second half of the 16th century. Today they are a staple food in many parts of the world and an integral part of much of the world's food supply. As of 2014, potatoes were the world's fourth-largest food crop.")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SeeOur;