import React from 'react';
import styled from 'styled-components';
import { useFilterContex } from '../context/Filtercontex';
import Gridview from './Gridview';
import Listview from './Listview';


const ProductList = () => {
    const { filter_products, grid_view } = useFilterContex();
    if (grid_view === true) {
        return (
            <Gridview products={filter_products} />
        )
    }
    if (grid_view === false) {
        return (
            <Listview products={filter_products} />
        )
    }
};

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

export default ProductList