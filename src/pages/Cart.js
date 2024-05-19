import React, {useContext, useState} from 'react';
import {BsCartX} from 'react-icons/bs';
import {calculateTotal, displayMoney} from '../helpers/utils';
import useDocTitle from '../hooks/useDocTitle';
import cartContext from '../contexts/cart/cartContext';
import CartItem from '../components/cart/CartItem';
import EmptyView from '../components/common/EmptyView';
import {Form} from "../contexts/form";
import RhfWithAction from "../components/modal";
import styled from "styled-components";
import { IoMdCloseCircleOutline } from "react-icons/io";
import quantityBox from "../components/common/QuantityBox";

const Cart = () => {

    useDocTitle('Cart');

    const {cartItems} = useContext(cartContext);

    const cartQuantity = cartItems.length;

    // total original price
    const cartTotal = cartItems.map(item => {
        return item.originalPrice * item.quantity;
    });

    const calculateCartTotal = calculateTotal(cartTotal);
    const displayCartTotal = displayMoney(calculateCartTotal);


    // total discount
    const cartDiscount = cartItems.map(item => {
        return item.quantity<item.quantityBox? (item.originalPrice - item.finalPrice) * item.quantity : (item.originalPrice - item.finalPrice*0.9) * item.quantity
    });

    const calculateCartDiscount = calculateTotal(cartDiscount);
    const displayCartDiscount = displayMoney(calculateCartDiscount);


    // final total amount
    const totalAmount = calculateCartTotal - calculateCartDiscount;
    const displayTotalAmount = displayMoney(totalAmount);

    const [showModal, setShowModal] = useState(false);
    const handleOrderButtonClick = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) { // Проверяем, что клик произошел именно на overlay
            setShowModal(false);
        }
    };

    return (
        <>
            <section id="cart" className="section">
                <div className="container">
                    {
                        cartQuantity === 0 ? (
                            <EmptyView
                                icon={<BsCartX/>}
                                msg="Ваша корзина пуста"
                                link="/all-products"
                                btnText="Начать покупки"
                            />
                        ) : (
                            <div className="wrapper cart_wrapper">
                                <div className="cart_left_col">
                                    {
                                        cartItems.map(item => (
                                            <CartItem
                                                quantityBox={quantityBox}
                                                key={item.id}
                                                {...item}
                                            />
                                        ))
                                    }
                                </div>

                                <div className="cart_right_col">
                                    <div className="order_summary">
                                        <h3>
                                            В корзине &nbsp;
                                            ( {cartQuantity} {cartQuantity > 1 ? 'товаров' : 'товар'} )
                                        </h3>
                                        <div className="order_summary_details">
                                            <div className="price">
                                                <span>Стоимость</span>
                                                <b>{displayCartTotal}</b>
                                            </div>
                                            <div className="discount">
                                                <span>Скидка</span>
                                                <b>- {displayCartDiscount}</b>
                                            </div>
                                            <div className="delivery">
                                                <span>Доставка</span>
                                                <b>бесплатно</b>
                                            </div>
                                            <div className="separator"></div>
                                            <div className="total_price">
                                                <b><small>Всего</small></b>
                                                <b>{displayTotalAmount}</b>
                                            </div>
                                        </div>
                                        <button type="button" className="btn checkout_btn"
                                                onClick={handleOrderButtonClick}>Заказать
                                        </button>
                                        {showModal &&
                                        <ModalWindow onClick={handleOverlayClick}>
                                            <InputGroup>
                                                <CloseButton onClick={() => setShowModal(false)}><IoMdCloseCircleOutline size={"30"}></IoMdCloseCircleOutline></CloseButton>
                                                <RhfWithAction cartItems={cartItems} displayTotalAmount={displayTotalAmount}/>
                                            </InputGroup>
                                        </ModalWindow>}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    );
};

export default Cart;
export const ModalWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`
export const InputGroup = styled.div`
  position: relative;
  background-color: #000000;
  width: 400px;
  padding: 20px;
  border-radius: 5px;
`
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #e1dede;
  border: none;
  cursor: pointer;
`