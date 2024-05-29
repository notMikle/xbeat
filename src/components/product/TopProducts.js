import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import useActive from '../../hooks/useActive';
import productsData from '../../data/productsData';
import ProductCard from './ProductCard';


const TopProducts = () => {
    // if(sessionStorage.getItem('category')){
    //     if (sessionStorage.getItem('category')==='Показать все') {
    //         // productsData = productsData.filter(item=>item)
    //     }
    //     else {productsData = productsData.filter(item => item.category === sessionStorage.getItem('category'))}
    // }

    const [products, setProducts] = useState(sessionStorage.getItem('category')? sessionStorage.getItem('category')==='Показать все'?productsData:productsData.filter(item => item.category === sessionStorage.getItem('category')):productsData);

    const { activeClass, handleActive } = useActive(sessionStorage.getItem('i')?Number(sessionStorage.getItem('i')):0);
    // making a unique set of product's category
    const productsCategory = [
        'Показать все',
        ...new Set(productsData.map(item => item.category))
    ];

    // handling product's filtering
    const handleProducts = (category, i) => {
        let cat = sessionStorage.getItem('category')
        if (cat === 'Показать все') {
            setProducts(productsData);
            handleActive(i);
            return;
        }

        const filteredProducts = productsData.filter(item => item.category === cat);
        setProducts(filteredProducts);
        handleActive(i);
    };


    return (
        <>
            <div className="products_filter_tabs">
                <ul className="tabs">
                    {
                        productsCategory.map((item, i) => (
                            <li
                                key={i}
                                className={`tabs_item ${activeClass(i)}`}
                                onClick={() => {
                                    sessionStorage.setItem('category', item)
                                    sessionStorage.setItem('i', i)
                                    handleProducts(item, i)
                                }}
                            >
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="wrapper products_wrapper">
                {
                    products.slice(0, 19).map(item => (
                        <ProductCard
                            key={item.id}
                            {...item}
                        />
                    ))
                }
                <div className="card products_card browse_card">
                    <Link to="/all-products">
                        Показать все <br /> товары <BsArrowRight />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default TopProducts;