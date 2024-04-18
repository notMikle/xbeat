import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';

import { AiOutlineInstagram } from "react-icons/ai";
import { PiTelegramLogo } from "react-icons/pi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { dropdownMenu } from '../../data/headerData';
import commonContext from '../../contexts/common/commonContext';
import cartContext from '../../contexts/cart/cartContext';
import AccountForm from '../form/AccountForm';
import SearchBar from './SearchBar';
import styled from "styled-components";


const Header = () => {

    const { formUserInfo, toggleForm, toggleSearch } = useContext(commonContext);
    const { cartItems } = useContext(cartContext);
    const [isSticky, setIsSticky] = useState(false);


    // handle the sticky-header
    useEffect(() => {
        const handleIsSticky = () => window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);

        window.addEventListener('scroll', handleIsSticky);

        return () => {
            window.removeEventListener('scroll', handleIsSticky);
        };
    }, [isSticky]);


    const cartQuantity = cartItems.length;


    return (
        <>
            <header id="header" className={isSticky ? 'sticky' : ''}>
                <div className="container">
                    <div className="navbar">
                        <h2 className="nav_logo">
                            <Link to="/">Bandido Barbershop</Link>
                        </h2>
                        <nav className="nav_actions">
                            <div className="search_action">
                                <span onClick={() => toggleSearch(true)}>
                                    <AiOutlineSearch/>
                                </span>
                                <div className="tooltip">Search</div>
                            </div>

                            <div className="cart_action">
                                <Link to="/cart">
                                    <AiOutlineShoppingCart/>
                                    {
                                        cartQuantity > 0 && (
                                            <span className="badge">{cartQuantity}</span>
                                        )
                                    }
                                </Link>
                                <div className="tooltip">Cart</div>
                            </div>

                            <div className="user_action">
                                <span>
                                    <AiOutlineUser/>
                                </span>
                                <div className="dropdown_menu">
                                    <h4>Привет! {formUserInfo && <Link to="*">&nbsp;{formUserInfo}</Link>}</h4>
                                    <p>Ваш аккаунт здесь</p>
                                    {
                                        !formUserInfo && (
                                            <button
                                                type="button"
                                                onClick={() => toggleForm(true)}
                                            >
                                                Login / Signup
                                            </button>
                                        )
                                    }
                                    <div className="separator"></div>
                                    <ul>
                                        {
                                            dropdownMenu.map(item => {
                                                const {id, link, path} = item;
                                                return (
                                                    <li key={id}>
                                                        <Link to={path}>{link}</Link>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <StyledContact>
                                <Call>
                                    <a href="">+7-950-715-77-66</a>
                                </Call>
                                <Call>
                                    <a href="https://t.me/bandidorussia"><PiTelegramLogo/></a>
                                    <a href="https://wa.me/+79507157766"><AiOutlineWhatsApp/></a>
                                    <a href=""><AiOutlineInstagram/></a>
                                </Call>
                            </StyledContact>
                        </nav>
                    </div>
                </div>
            </header>
            <SearchBar/>
            <AccountForm/>
        </>
    );
};

export default Header;
const Call = styled.small`
  display: flex;
  justify-content: space-around;
font-size: 15px;
`
const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`