import React, { useState } from 'react'
import styled from 'styled-components';
import { AiOutlineCheck } from "react-icons/ai";
import CartAmount from './CartAmount';
import { NavLink } from 'react-router-dom';
import { Button } from './Button';

const AddToCart = ({ product }) => {

    const { colors } = product;
    const [color, setcolor] = useState(colors[0]);

    return (
        <Wrapper>
            <div className="colors">
                <p>
                    colors:
                    {
                        colors.map((curColor, index) => {
                            return <button className={color === curColor ? "btnColor active" : "btnColor"} key={index} onClick={() => { setcolor(curColor) }} style={{ backgroundColor: curColor }}>
                                {color === curColor ? <AiOutlineCheck className='check' /> : null}
                            </button>
                        })
                    }
                </p>
            </div>

            {/* add to cart */}
            <CartAmount product={product} />

            <NavLink to="/cart">
                <Button className='btn'> Add To Cart</Button>
            </NavLink>


        </Wrapper>
    )
};
const Wrapper = styled.section`
.colors{
    p{
        display: flex;
        align-items: center;
        .btnColor{
            margin-right: 0.5rem;
            border-radius: 50%;
            border: none;
            width: 2rem;
            outline: none;
            height: 2rem;
            opacity: 0.6;
            position: relative;
            cursor: pointer;
            &:hover{
                opacity: 1;
            } 

        }
        .active{
            opacity: 1;
            .check{
                color: white;
                font-weight: 900;
                position: relative;
            }
        }
    }
    
}
`

export default AddToCart