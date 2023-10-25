import React from 'react';
import "./Footer.css";
import logo from "../../../image/Logo.png"
import {useTranslation} from "react-i18next";

function Footer() {
    const {t} = useTranslation()
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="footer-box">
                        <div className="footer-text">
                            <a href="/"><img src={logo}/></a>
                            <p>{t("Clarity gives you the blocks and components you need to create a truly professional website.")}</p>
                            <a href="https://twitter.com/?lang=ru">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                            <a href="https://ru-ru.facebook.com/">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                            <a href="https://www.instagram.com/accounts/login/">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                            <a href="https://github.com/">
                                <ion-icon name="logo-github"></ion-icon>
                            </a>
                        </div>
                        <div className="footer-text2">
                            <h4>{t("Company")}</h4>
                            <p>{t("About")} </p>
                            <p>{t("Features")}</p>
                            <p>{t("Works")}</p>
                            <p>{t("Career")}</p>
                        </div>
                        <div className="footer-text2">
                            <h4>{t("Help")}</h4>
                            <p>{t("Customer Support")} </p>
                            <p>{t("Delivery Details")}</p>
                            <p>{t("Terms & Conditions")}</p>
                            <p>{t("Privacy Policy")}</p>

                        </div>
                        <div className="footer-text2">
                            <h4>{t("Resources")}</h4>
                            <p> {t("Free eBooks")} </p>
                            <p>{t("Development Tutorial")} </p>
                            <p>{t("How to - Blog")}</p>
                            <p>{t("Youtube Playlist")}</p>
                        </div>
                    </div>
                    <hr className="footer-hr"/>
                    <h5 className="footer-h5">{t("© Copyright 2022, All Rights Reserved by Falcon Thought")}</h5>
                </div>
            </div>
        </div>
    );
}

export default Footer;