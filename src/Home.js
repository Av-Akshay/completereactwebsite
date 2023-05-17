import React from 'react';
import HeroSection from './components/HeroSection';
import Service from './components/Service';
import Trusted from './components/Trusted';
import FeatureProducts from './components/FeatureProducts';


const Home = () => {
    return (
        <>
            <HeroSection name={"Chauhan Store"} />
            <FeatureProducts />
            <Service />
            {/* <Trusted /> */}
            <Trusted />
        </>


    )
}


export default Home;