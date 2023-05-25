import React from 'react';
import HeroSection from './components/HeroSection';
// import UseProductContext from "./context/productcontex "
import { UseProductContext } from './context/productcontex';


const About = () => {
    const Myinfo = UseProductContext();
    return (
        <>
            <HeroSection
                name={"Chauhan Ecommerce"}
            />
        </>
    )
}

export default About;