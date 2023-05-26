import React from 'react'
import styled from 'styled-components';
import { useFilterContex } from '../context/Filtercontex';
// import Categories from './Categories';

const FilterSection = () => {
    const { filters: { text, category, company }, updateFilterValue, All_products } = useFilterContex();

    const getUniqueValues = (data, property) => {
        let newVal = data.map((curElm) => {
            return curElm[property];
        })
        return newVal = ["all", ...new Set(newVal)]


    }
    const categoryOnlyData = getUniqueValues(All_products, "category");
    const companyOnlyData = getUniqueValues(All_products, "company");

    return (
        <Wrapper>
            <div className="filter-search">
                <form action="" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        name="text"
                        value={text}
                        onChange={updateFilterValue}
                        placeholder='SEARCH' />
                </form>
                <div className='filter-category'>
                    <h3>Category</h3>
                    <div className='filter-category-products'>
                        {
                            categoryOnlyData.map((curElem, index) => {
                                return <button key={index}
                                    type='button'
                                    name="category"
                                    value={curElem}
                                    onClick={updateFilterValue}>
                                    {curElem}
                                </button>
                            })
                        }
                    </div>
                </div>
                <div className="filter-company">
                    <h3> company</h3>
                    <form action="#">
                        <select name="company" id="company" className='filter-company--select' onClick={updateFilterValue}>
                            {
                                companyOnlyData.map((curElem, index) => {
                                    return <option
                                        key={index}
                                        name="company"
                                        value={curElem}>
                                        {curElem}
                                    </option>
                                })
                            }
                        </select>
                    </form>
                </div>

            </div>
        </Wrapper>
    )
};
const Wrapper = styled.section`
margin-top: 5rem;
.filter-category{
    display: flex;
    flex-direction: column;
    margin: 5rem 0 0 0 ;
    gap:1rem;
    h3{
        font-weight: 600;
    }
    .filter-category-products{
        display: flex;
        flex-direction: column;
        gap:1rem;
        button{
            outline: none;
            border: none;
            background-color: #fff;
            text-align: left;
            transition: all 0.2s linear;
            width: 40%;
            margiin-right: auto;
            position: relative;
        &:hover{
            color: ${({ theme }) => theme.colors.helper};
        }
        &::after{
            content: " ";
            position: absolute;
            width:0;
            height:0.2rem;
            left:-5%;
            top: 90%;
            background-color:  ${({ theme }) => theme.colors.helper};
            transition: all 0.3s linear;
        }
        &:hover::after{
            width:100%;
        }
        }
    }
}
.filter-company{
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    gap:1rem;
    h3{
        font-weight: 600;
    }
    .filter-company--select{
        outline:none;
        border-color:${({ theme }) => theme.colors.helper};
        padding:0.5rem; 
        
    }
}
`

export default FilterSection