import React from 'react';
import "./Hero.jsx.css"
import Fragme from "../../image/fragme img.png"
import Line from "../../image/line.png"
import Point from "../../image/point.png"


function Hero() {
    return (
        <div className="hero">
            <div className="container">
                <h1 className="heroText">Testy Chips</h1>
                <div className="hero-box">
                    <div>
                        <img src={Fragme} alt="img"/>
                    </div>
                    <div className="hero-line">
                        <img src={Line} alt="line"/>
                    </div>
                    <div className="hero-column">
                        <span>Low</span>
                        <span>Medium</span>
                        <span>Best</span>
                    </div>
                </div>
                <div className="hero-btn">
                    <button>See all item <ion-icon name="arrow-forward-outline"></ion-icon></button>
                </div>
                <div className="hero-box">
                    <div>
                        <img src={Point} alt="img"/>
                    </div>
                    <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"
                                 fill="none">
<rect x="1" y="1" width="78" height="78" rx="11" stroke="white" stroke-width="2" />
<path d="M18.6667 39C18.1144 39 17.6667 39.4477 17.6667 40C17.6667 40.5523 18.1144 41 18.6667 41V39ZM62.4849 40.7071C62.8754 40.3166 62.8754 39.6834 62.4849 39.2929L56.1209 32.9289C55.7304 32.5384 55.0972 32.5384 54.7067 32.9289C54.3162 33.3195 54.3162 33.9526 54.7067 34.3431L60.3636 40L54.7067 45.6569C54.3162 46.0474 54.3162 46.6805 54.7067 47.0711C55.0972 47.4616 55.7304 47.4616 56.1209 47.0711L62.4849 40.7071ZM18.6667 41H61.7778V39H18.6667V41Z" fill="white"/></svg>
                        <span className="hero-text-svg" >Explore</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;