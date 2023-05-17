import React from 'react'
import styled from 'styled-components';

const AddToCart = ({ product }) => {
    const { id, colors, stock } = product;

    return (
        <Wrapper>
            <div className="colors">
                <p>
                    colors:
                    {
                        colors.map((curColor, index) => {
                            return <button key={index} style={{ backgroundColor: curColor, marginRight: "0.5rem", borderRadius: "50%", border: "none", width: "2rem", outline: "none", height: '2rem' }}>

                            </button>
                        })
                    }
                </p>
            </div>
        </Wrapper>
    )
};
const Wrapper = styled.section`
.colors{
    p{
        display: flex;
        align-items: center;
    }
    
}
`

export default AddToCart