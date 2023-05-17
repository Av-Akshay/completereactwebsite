import styled from "styled-components";
import { UseProductContext } from "../context/productcontex";
import Product from "./Product";

const FeatureProducts = () => {
    const { isLoading, featureProducts } = UseProductContext();
    // console.log(UseProductContext());
    if (isLoading) {
        return <div>....Loading</div>
    }
    return (
        <Wrapper className="section">
            <div className="container">
                <div className="intro-data"> Check Now</div>
                <div className="common-heading">
                    Our Feature Services
                </div>
                <div className="grid grid-three-column">
                    {featureProducts.map((curElem) => {
                        return <Product key={curElem.id} {...curElem} />
                    })}
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.colors.bg};
    margin: 0 0 2rem 0;
.container{
    height: auto;
    padding: 5rem;
    
}
.grid{
    .card{
        padding: 1rem 1rem 0 1rem;
        background-color: #fff;
    }  
} 
figure{
    position: relative;
}
figure::after{
    content: "";
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.6);
    transition: all 0.5s linear;
}
figure:hover::after{
    width: 100%;
}
.card-data-flex{
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
@media (max-width: ${({ theme }) => theme.media.mobile}){
    .grid-three-column{
        grid-template-columns: repeat(3,1fr);
    }
}
@media (max-width: 580px){
    .grid-three-column{
        grid-template-columns: 1fr;
    }
}

`

export default FeatureProducts