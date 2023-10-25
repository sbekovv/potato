import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux";
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        </BrowserRouter>
    </Provider>
);
