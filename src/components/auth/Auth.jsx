import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {createUser} from "../../redux/slice/userSlice";
import "./Auth.css";
import {useTranslation} from "react-i18next";

function Auth({setIsVisible}) {
    const {t} = useTranslation()
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        name: '',
        avatar: ''
    });

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const {name, value} = e.target
        setUserData({...userData, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userData);
        dispatch(createUser(userData))
        setIsVisible(false);
    }

    return (
        <div className="overlay" onClick={(e)=>{
            let authDiv = e.target.closest('#test')
            if (!authDiv) setIsVisible(false)
            if (authDiv && authDiv.classList.contains('auth')){
                return
            }
        }}>
            <div className="auth" id='test'>
                <h1 className="auth-h3">{t("Lays_kyrgyzstan")}</h1>
                <form onSubmit={handleSubmit}>
                    <div className="auth-box">
                        <div>
                            <iframe className="elementor-video" width="930" height="523" src="https://www.youtube.com/embed/ZkHJOzYugJw"
                                    title="Lay&#39;s Бешбармак - каждый день вкуснее с Lay&#39;s!" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                        <div className="auth-text">
                            <h1>{t("С чего начинается LAY'S®?")}</h1>
                            <p>{t("Все начинается с отборного российского картофеля, который мы с заботой выращиваем, а затем обжариваем в натуральном масле и добавляем ароматную приправу, чтобы создать вкусные и хрустящие картофельные чипсы LAY’S®.")}
                                <br/>
                                <br/>
                                {t("Благодаря разнообразию вкусов LAY’S®, изысканности специй и ярким упаковкам, каждый человек сможет найти в чипсах LAY’S® то, что ему нужно, чтобы сделать день ярким и запоминающимся.")}</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Auth;