import React from 'react';
import "./Header.css";
import HeaderLogo from "../../image/Logo.png"

function Header() {
    return (
        <div className="header">
            <div className="container box">
                <div>
                    <img src={HeaderLogo} alt="Logo"/>
                </div>
                <div className="header-list">
                    <a href="/">Home</a>
                    <a href="">Shop</a>
                    <a href="">Pricing</a>
                    <a href="">Services</a>
                </div>
                <div>
                    <span className="header-icon"><ion-icon name="search-outline"></ion-icon></span>
                    <span className="header-icon"><ion-icon name="bag-handle-outline"></ion-icon></span>
                </div>
            </div>

        </div>
    );
}

export default Header;