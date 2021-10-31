import React from 'react'
import Topbar from '../components/topbar/Topbar';
import Slider from "../components/slider/Slider";
import Categories from '../components/Categories/Categories';
import PopularProducts from '../components/popularProdcuts/PopularProducts';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <>
            <Topbar />
            <Slider />
            <Categories />
            <Footer />
        </>
    )
}

export default Home
