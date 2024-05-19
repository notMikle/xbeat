import React from 'react';
import reviewsData from '../../data/reviewsData';
import useActive from '../../hooks/useActive';
import ProductReviews from './ProductReviews';
import styled from "styled-components";


const ProductSummary = (props) => {

    const { brand, title, info, category, type, connectivity } = props;

    const { active, handleActive, activeClass } = useActive('overview');


    return (
        <>
            <section id="product_summary" className="section">
                <div className="container">

                    {/*===== Product-Summary-Tabs =====*/}
                    <div className="prod_summary_tabs">
                        <ul className="tabs">
                            {/*<li*/}
                            {/*    className={`tabs_item ${activeClass('specs')}`}*/}
                            {/*    onClick={() => handleActive('specs')}*/}
                            {/*>*/}
                            {/*    О продукте*/}
                            {/*</li>*/}
                            <li
                                className={`tabs_item ${activeClass('overview')}`}
                                onClick={() => handleActive('overview')}
                            >
                                Описание
                            </li>
                            {/*<li*/}
                            {/*    className={`tabs_item ${activeClass('reviews')}`}*/}
                            {/*    onClick={() => handleActive('reviews')}*/}
                            {/*>*/}
                            {/*    Reviews*/}
                            {/*</li>*/}
                        </ul>
                    </div>

                    {/*===== Product-Summary-Details =====*/}
                    <div className="prod_summary_details">
                        {
                            active === 'specs' ? (
                                <div className="prod_specs">
                                    <ul>
                                        <li>
                                            <span>Бренд</span>
                                            <span>{brand}</span>
                                        </li>
                                        <li>
                                            <span>Название</span>
                                            <span>{title}</span>
                                        </li>
                                        <li>
                                            <span>Категория</span>
                                            <span>{category}</span>
                                        </li>
                                        {/*<li>*/}
                                        {/*    <span>Тип</span>*/}
                                        {/*    <span>{type}</span>*/}
                                        {/*</li>*/}
                                        {/*<li>*/}
                                        {/*    <span>Описание</span>*/}
                                        {/*    <span>{info}</span>*/}
                                        {/*</li>*/}
                                        {/*<div className="prod_overview">*/}
                                        {/*    <span>{info}</span>*/}
                                        {/*</div>*/}
                                    </ul>
                                </div>
                            ) : active === 'overview' ? (
                                <div className="prod_overview">
                                    <h3>Представляем Вам <span>{title}</span> {info} </h3>
                                    <StyledUl>
                                        <Styledli>
                                            <span>Бренд</span>
                                            <span>{brand}</span>
                                        </Styledli>
                                        <Styledli>
                                            <span>Название</span>
                                            <span>{title}</span>
                                        </Styledli>
                                        <Styledli>
                                            <span>Категория</span>
                                            <span>{category}</span>
                                        </Styledli>
                                    </StyledUl>
                                </div>
                            ) : (
                                <div className="prod_reviews">

                                </div>
                            )

                        }

                    </div>

                </div>
            </section>
        </>
    );
};

export default ProductSummary;
const Styledli = styled.li`
display: flex;
  justify-content: space-between;
`
const StyledUl = styled.ul`
max-width: 600px;
`