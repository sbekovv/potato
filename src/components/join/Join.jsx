import React from 'react';
import "./Join.css";
import {useTranslation} from "react-i18next";

function Join() {
    const {t} = useTranslation()
    return (
        <div className="join">
            <div className="join-box">
                <div className="join-box-small">
                    <h1>{t("Join our Instagram")}</h1>
                    <p>{t("Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature")}
                        <br/>{t("from 45 BC, making.")}</p>
                    <label>
                        <input type="text" defaultValue="https://www.instagram.com/lays/" />
                        <a href="https://www.instagram.com/lays/"><button>{t("Subscribe")}</button></a>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Join;