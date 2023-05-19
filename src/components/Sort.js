import React from 'react'
import styled from 'styled-components';
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContex } from '../context/Filtercontex';


const Sort = () => {
    const { grid_view, setGridView, setListview } = useFilterContex();

    return (
        <Wrapper>
            <div className="sorting-list--grid">
                <button className={grid_view ? 'active sort-btn' : 'sort-btn'} onClick={setListview}>
                    <BsFillGridFill className='icon' />
                </button>
                <button className={grid_view ? 'sort-btn' : 'active sort-btn'} onClick={setGridView}>
                    <BsList className='icon' />
                </button>
            </div>
            <div className="products-data"> available</div>
            <div className="sort-selection">dropdown</div>
        </Wrapper>
    )
};
const Wrapper = styled.section`

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5rem 1rem;
    .sorting-list--grid{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap:1.2rem;
        .sort-btn{
            border: none;
            padding: 0.8rem;
            border-radius: 0.5rem;
            cursore: pointer; 
            line-height:0;
            .icon{
                font-size:1.6rem;
                font-weight: 600;
            }
        }
        .active{
            background-color: #000;
            color: #fff;
        }
    }
`;


export default Sort