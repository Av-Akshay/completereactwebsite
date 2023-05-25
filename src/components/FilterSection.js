import React from 'react'
import styled from 'styled-components';
import { useFilterContex } from '../context/Filtercontex';

const FilterSection = () => {
    const { filters: { text }, updateFilterValue } = useFilterContex();

    return (
        <Wrapper>
            <div className="filter-search">
                <form action="" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        name="text"
                        value={text}
                        onChange={updateFilterValue} />
                </form>
            </div>
        </Wrapper>
    )
};
const Wrapper = styled.section`
margin-top: 5rem;

`

export default FilterSection