import React from 'react';
import Lays2 from "../../image/Lays2.png";
import "./World.css";

function World() {
    return (
        <div className="world">
            <div className="container">
                <div className="world-box">
                    <h1>world class awesome Chips</h1>
                    <img src={Lays2} />
                   <div className="world-text">
                       <h4>Overview</h4>
                       <p>the blossoms so much that she put them in her hair. Her husband, Louis XVI, put one in his buttonhole, inspiring a brief vogue in which the French.</p>
                       <button>Learn More <ion-icon name="arrow-forward-outline"></ion-icon></button>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default World;