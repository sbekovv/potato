import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../redux/slice/productSlice";
import "./Shop.css";
import { useTranslation } from "react-i18next";

function Shop() {
    const { t } = useTranslation();
    const { productsData } = useSelector((state) => state.products);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getProducts())
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }, [dispatch]);

    return (
        <div className="container">
            <h1 className="shopH1">{t("Магазин")}</h1>
            <div className="input-search-shop">
                <center><h1>{t("Search")}</h1></center>
                <input
                    placeholder={t("Search something...")}
                    className="input"
                    required=""
                    name="text"
                    type="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {productsData && productsData.length > 0 ? (
                <div className="shopBox">
                    {productsData
                        .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
                        .slice(0, 17)
                        .map(el => (
                            <div key={el.id}>
                                <div
                                    onClick={() => {
                                        // console.log('ID переданный в ProductDetail:', el.id);
                                        navigate(`/product/${el.id}`);
                                    }}
                                    className="shopBlock"
                                >
                                    <img
                                        style={{ width: '298px', height: '458px', borderRadius: '6px' }}
                                        src={el.imageUrl}
                                        alt={el.name}
                                    />
                                    <h1>{el.name}</h1>
                                    <h4>{el.price}Сом</h4>
                                </div>
                            </div>
                        ))}
                </div>
            ) : (
                <div>{t("No products available")}</div>
            )}
        </div>
    );
}

export default Shop;
