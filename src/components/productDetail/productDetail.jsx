import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getSingleProducts} from '../../redux/slice/singleProductSlice';
import {addItemToCart} from '../../redux/slice/cartSlice';
import './productDetail.css';

function ProductDetail() {
    const {id} = useParams();
    const {singleProductsData, isLoading, error} = useSelector((state) => state.singleProduct);
    console.log(singleProductsData, 'zzzzz')
    console.log(id)
    const dispatch = useDispatch();

    const paramsId = id
    console.log(paramsId, 'mmmmmm')
    useEffect(() => {
        console.log('ID из параметров:', id);
        dispatch(getSingleProducts());
    }, [dispatch]);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <div>Произошла ошибка при загрузке данных: {error}</div>;
    }

    const idInfo = singleProductsData.filter((item) =>  item.id === +paramsId);
    console.log(idInfo)


    return (
        <div className="detailBox">
            {
                idInfo.map((item) => (
             <div className="detailBox">
                 <img style={{width: '400px'}} src={item.imageUrl} alt={singleProductsData.name}/>
                 <div className="detailText">
                     <h3>{item.name}</h3>
                     <p>{item.description}</p>
                     <h4>{item.price}Сом <span> Скидка {item.price + 20}Сом</span></h4>
                     <button
                         style={{textDecoration: 'transparent'}}
                         onClick={() => dispatch(addItemToCart(item))}
                         className="detailBtn"
                     >
                         Добавить в корзину
                     </button>
                 </div>
             </div>
                ))
            }
        </div>
    );
}

export default ProductDetail;
