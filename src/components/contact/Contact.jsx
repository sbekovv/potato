import React from 'react';
import "./Contact.css";
import {useTranslation} from "react-i18next";

function Contact() {
    const {t} = useTranslation()
    return (
            <div className="container">
                <h1 className="contactsText">{t("Контакты")}</h1>
                <div className="contactsBox">

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25559.712217552522!2d74.59818733661899!3d42.86335340479849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7af0684ae7b%3A0x9157f34b687174b!2z0JzQtdC70LrQvtC-0L_RgtC-0LLRi9C5INC80LDQs9Cw0LfQuNC9IEthbXBhLmtnICjQktC-0YHRgtC-0LogNSk!5e0!3m2!1sru!2skg!4v1697186082566!5m2!1sru!2skg"
                        width="600"
                        height="450"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                    <div className="contact">
                        <h1>
                            {t("Телефон")}
                            <br/>
                            <br/>
                            <a href="tel:+996704448866">+996704448866</a>
                        </h1>
                    </div>

                    <div className="contact">
                        <h1>
                            {t("E-mail")} <br/>
                            <br/>
                            <a href="mailto:bekturchik03@gmail.com">bekturchik03@gmail.com</a>
                        </h1>
                    </div>

                    <div className="contact">
                        <h1>
                            {t("Адрес")} <br/>
                            <br/>
                            <a href="https://maps.google.com/maps?q=Адрес">г. Москва, 3-я улица Строителей, 25</a>
                        </h1>
                    </div>

                </div>
            </div>
    );
}

export default Contact;