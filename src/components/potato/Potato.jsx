import React from 'react';
import "./Potato.css"
import Poptato from "../../image/Potato-img.png"
import LaysAll from "../../image/Lays-all.png"

function Potato() {
    return (
        <div className="potato">
            <div className="container">
                <div className="potato-box">
                    <div className="potato-img">
                        <img src={Poptato}/>
                    </div>
                    <div className="potato-text">
                        <h1>The Potato</h1>
                        <hr/>
                        <p>When potato plants bloom, they send up five-lobed flowers that spangle fields like fat purple
                            stars. By some accounts, Marie Antoinette liked the blossoms so much that she put .</p>
                        <div className="product-img-all">
                            <img src={LaysAll} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Potato;