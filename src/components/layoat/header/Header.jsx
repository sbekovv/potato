import React from 'react';
import "./Header.css";
import HeaderLogo from "../../../image/Logo.png"
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

function Header() {
    const {t, i18n} = useTranslation();
    const {cartData} = useSelector((state) => state.cart);
    const location = useLocation();

    return (
        <div className="header">
            <div className="container box">
                <div>
                    <Link to="/"><img src={HeaderLogo} alt="Logo"/></Link>
                </div>
                <div className="header-list box2">
                    <Link className={`header ${location.pathname === '/' ? 'red-bg' : ''}`} to="/">{t("Home")}</Link>
                    <Link className={`header ${location.pathname === '/shop' ? 'red-bg' : ''}`} to="/shop">{t("Shop")}</Link>
                    <Link className={`header ${location.pathname === '/contact' ? 'red-bg' : ''}`} to="/contact">{t("Contact")}</Link>
                    <select className="header-select" onChange={(e) => i18n.changeLanguage(e.target.value)}>
                        <option value="en">RU</option>
                        <option value="ru">EN</option>
                    </select>
                </div>


            <div className="header-icon-row">
                <Link to="cart">
                        <span className="header-icon header-search">
                            <ion-icon name="bag-handle-outline"></ion-icon>
                        </span>
                    <span className="header-length">{cartData.length}</span>
                </Link>
            </div>
        </div>
</div>
)
    ;
}

export default Header;
