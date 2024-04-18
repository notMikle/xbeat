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
                                            <span>Брэнд</span>
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
                                        <li>
                                            <span>Тип</span>
                                            <span>{type}</span>
                                        </li>
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
                                    <p>Buy the <b>{title} {info}</b> which offers you with fabulous music experience by providing you with awesome sound quality that you can never move on from. Enjoy perfect flexibility and mobility with amazing musical quality with these {category} giving you a truly awesome audio experience. It blends with exceptional sound quality and a range of smart features for an unrivalled listening experience.</p>
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