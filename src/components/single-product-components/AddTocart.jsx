import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Button } from "../../style/Button";
import CartAmount from "../cart-components/CartAmount";
import { addToCart } from "../../reduxToolKit/slices";

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [Amount, setAmount] = useState(1);
  const increment = () => {
    Amount < stock ? setAmount(Amount + 1) : setAmount(stock);

    if (Amount === stock) {
      alert(`only ${stock} item present in stock`);
    }
  };
  const decrement = () => {
    Amount > 1 ? setAmount(Amount - 1) : setAmount(1);
  };
  return (
    <Wrapper>
      <div className="colors">
        <p>
          colors:
          {colors?.map((curColor, index) => {
            return (
              <button
                className={color === curColor ? "btnColor active" : "btnColor"}
                key={index}
                onClick={() => {
                  setColor(curColor);
                }}
                style={{ backgroundColor: curColor }}
              >
                {color === curColor ? (
                  <AiOutlineCheck className="check" />
                ) : null}
              </button>
            );
          })}
        </p>
      </div>

      {/* add to cart */}
      <CartAmount Amount={Amount} decrement={decrement} increment={increment} />

      <NavLink
        to="/cart"
        onClick={() => dispatch(addToCart({ id, Amount, color, product }))}
      >
        <Button className="btn"> Add To Cart</Button>
      </NavLink>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .colors {
    p {
      display: flex;
      align-items: center;
      .btnColor {
        margin-right: 0.5rem;
        border-radius: 50%;
        border: none;
        width: 2rem;
        outline: none;
        height: 2rem;
        opacity: 0.6;
        position: relative;
        cursor: pointer;
        &:hover {
          opacity: 1;
        }
      }
      .active {
        opacity: 1;
        .check {
          color: white;
          font-weight: 900;
          position: relative;
        }
      }
    }
  }
`;

export default AddToCart;
