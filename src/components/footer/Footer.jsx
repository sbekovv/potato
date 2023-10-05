import React from 'react';
import "./Footer.css";
import logo from "../../image/Logo.png"

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="footer-box">
                        <div className="footer-text">
                            <a href="/"><img src={logo}/></a>
                            <p>Clarity gives you the blocks and components you need to create a truly professional
                                website.</p>
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
                            <h4>Company</h4>
                            <p>About </p>
                            <p>Features </p>
                            <p>Works</p>
                            <p>Career</p>
                        </div>
                        <div className="footer-text2">
                            <h4>Help</h4>
                            <p>Customer Support </p>
                            <p>Delivery Details</p>
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>

                        </div>
                        <div className="footer-text2">
                            <h4>Resources</h4>
                            <p> Free eBooks </p>
                            <p>Development Tutorial </p>
                            <p>How to - Blog</p>
                            <p>Youtube Playlist</p>
                        </div>
                    </div>
                    <hr className="footer-hr"/>
                    <h5 className="footer-h5">© Copyright 2022, All Rights Reserved by Falcon Thought</h5>
                </div>
            </div>
        </div>
    );
}

export default Footer;