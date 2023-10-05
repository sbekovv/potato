import React from 'react';
import "./Product.css";
import Lays3 from "../../image/Lays3.png"
import LaysLuk from "../../image/Lays-luk.png"

function Product() {
    return (
        <div className="product">
            <div className="container">
                <div className="productBox">
                    <h1>Our product awesome overview</h1>
                    <img src={Lays3}/>
                </div>
                <div className="productBox">
                    <div>
                        <img src={LaysLuk}/>
                    </div>

                    <div className="product-text">
                        <button>Let’s Start <ion-icon name="arrow-forward-outline"></ion-icon></button>
                        <h2>Let’s grow your health with our product</h2>
                        <hr/>
                        <p>When potato plants bloom, they send up five-lobed flowers that spangle fields like fat purple
                            stars. By some accounts, Marie Antoinette liked the blossoms so much that she put them in
                            her hair. Her husband, Louis XVI, put one in his buttonhole, inspiring a brief vogue in
                            which the French aristocracy swanned around with potato plants on their clothes.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;