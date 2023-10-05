import React from 'react';
import "./Join.css";

function Join() {
    return (
        <div className="join">
            <div className="join-box">
                <div className="join-box-small">
                    <h1>Join our newsletter</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature <br/>
                        from 45 BC, making.</p>
                    <label>
                        <input type="text" placeholder="For latest update send mail"/>
                        <button>Subscribe</button>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Join;