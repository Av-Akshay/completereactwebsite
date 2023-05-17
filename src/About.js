import React from 'react';
import HeroSection from './components/HeroSection';
// import UseProductContext from "./context/productcontex "
import { UseProductContext } from './context/productcontex';


const About = () => {
    const Myinfo = UseProductContext();
    // const { Myname, myage } = Myinfo;
    console.log(Myinfo)



    return (
        <>
            {/* `{Myname} and my age is {myage}` */}
            <HeroSection
                name={"Chauhan Ecommerce"}
            />
        </>
    )
}

export default About;