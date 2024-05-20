import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { footMenu, footSocial } from '../../data/footerData';
import sendMessage from "../actions";
import cartItem from "../cart/CartItem";


const Footer = () => {

    const [subValue, setSubValue] = useState('');
    const [emailValue, setEmailValue] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        setSubValue('');
        setEmailValue('');
        sendMessage(subValue, emailValue)
    };

    const currYear = new Date().getFullYear();


    return (
        <footer id="footer">
            <div className="container">
                <div className="wrapper footer_wrapper">
                    <div className="foot_about">
                        <h2>
                            <Link to="/">Bandido Barbershop</Link>
                        </h2>
                        <div className="foot_subs">
                            <p>Напишите нам и мы вас проконсультируем</p>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    className="input_field"
                                    placeholder="Имя"
                                    required
                                    value={subValue}
                                    onChange={(e) => setSubValue(e.target.value)}
                                />
                                <input
                                    type="text"
                                    className="input_field"
                                    placeholder="Номер телефона"
                                    required
                                    value={emailValue}
                                    onChange={(e) => setEmailValue(e.target.value)}
                                />
                                <button type="submit" className="btn">Отправить</button>
                            </form>
                        </div>
                    </div>

                    {
                        footMenu.map(item => {
                            const { id, title, menu } = item;
                            return (
                                <div className="foot_menu" key={id}>
                                    <h4>{title}</h4>
                                    <ul>
                                        {
                                            menu.map(item => {
                                                const { id, link, path } = item;
                                                return (
                                                    <li key={id}>
                                                        <Link to={path}>{link}</Link>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            <div className="separator"></div>

            <div className="sub_footer">
                <div className="container">
                    <div className="sub_footer_wrapper">
                        <div className="foot_copyright">
                            <p>
                                {currYear} | BANDIDO cosmetic
                            </p>
                        </div>
                        <div className="foot_social">
                            {
                                footSocial.map((item) => {
                                    const { id, icon, path } = item;
                                    return (
                                        <a href={path} key={id}>{icon}</a>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;