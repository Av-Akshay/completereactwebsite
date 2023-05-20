import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const Gridview = ({ products }) => {
    return (
        <Wrapper className="section">
            <div className="container grid grid-three-column">
                {products?.map((curElem) => {
                    return <Product key={curElem.id} {...curElem} />
                })}
            </div>
        </Wrapper>
    )
};
const Wrapper = styled.section`
padding: 8rem 0;

.grid{
    gap: 3.2rem;
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

export default Gridview