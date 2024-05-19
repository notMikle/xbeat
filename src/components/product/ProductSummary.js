import React from 'react';
import reviewsData from '../../data/reviewsData';
import useActive from '../../hooks/useActive';
import ProductReviews from './ProductReviews';


const ProductSummary = (props) => {

    const { brand, title, info, category, type, connectivity } = props;

    const { active, handleActive, activeClass } = useActive('specs');


    return (
        <>
            <section id="product_summary" className="section">
                <div className="container">

                    {/*===== Product-Summary-Tabs =====*/}
                    <div className="prod_summary_tabs">
                        <ul className="tabs">
                            <li
                                className={`tabs_item ${activeClass('specs')}`}
                                onClick={() => handleActive('specs')}
                            >
                                О продукте
                            </li>
                            <li
                                className={`tabs_item ${activeClass('overview')}`}
                                onClick={() => handleActive('overview')}
                            >
                                Что-то написать
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
                                        <div className="prod_overview">
                                            <span>{info}</span>
                                        </div>
                                    </ul>
                                </div>
                            ) : active === 'overview' ? (
                                <div className="prod_overview">
                                    <h3>The <span>{title}</span> {info} provides with fabulous sound quality</h3>
                                    <ul>
                                        <li>Товар супер</li>
                                        <li>Доставка быстрая</li>
                                        <li>Не будешь чушпаном</li>
                                    </ul>
                                    <p>Купи<b>{title} {info}</b> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eos facilis illum inventore laudantium natus odit officia pariatur. Aperiam commodi dignissimos ex nisi officia placeat quaerat quas saepe suscipit voluptate?</span>
                                    </p>
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