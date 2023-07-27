import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import CartAmount from "./CartAmount";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import { useCartContext } from "../context/Cart_Context";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  const { id, colors, stock } = product;
  const [color, setcolor] = useState(colors[0]);
  const [Amount, setAmount] = useState(1);
  const Increment = () => {
    Amount < stock ? setAmount(Amount + 1) : setAmount(stock);

    if (Amount === stock) {
      alert(`only ${stock} item present in stock`);
    }
  };
  const Decrement = () => {
    Amount > 1 ? setAmount(Amount - 1) : setAmount(1);
  };

  return (
    <Wrapper>
      <div className="colors">
        <p>
          colors:
          {colors.map((curColor, index) => {
            return (
              <button
                className={color === curColor ? "btnColor active" : "btnColor"}
                key={index}
                onClick={() => {
                  setcolor(curColor);
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
      <CartAmount Amount={Amount} Decrement={Decrement} Increment={Increment} />

      <NavLink to="/cart" onClick={() => addToCart(id, Amount, color, product)}>
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
