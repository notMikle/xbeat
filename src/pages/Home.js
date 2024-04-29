import React from 'react';
import HeroSlider from '../components/sliders/HeroSlider';
import SectionsHead from '../components/common/SectionsHead';
import TopProducts from '../components/product/TopProducts';
import Services from '../components/common/Services';


const Home = () => {

    return (
        <main>
            <section id="hero" className='herohero'>
                <HeroSlider />
            </section>

            {/*<section id="featured" className="section">*/}
            {/*    <div className="container">*/}
            {/*        <SectionsHead heading="Популярные товары" />*/}
            {/*        <FeaturedSlider />*/}
            {/*    </div>*/}
            {/*</section>*/}

            <section id="products" className="section">
                <div className="container">
                    <SectionsHead heading="Каталог" />
                    <TopProducts />
                </div>
            </section>

            <Services />
        </main>
    );
};

export default Home;;