import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";

import styled from "styled-components";

const CartAmount = (props) => {
  return (
    <Wrapper>
      <div className="cart-button">
        <div className="amount-toggle">
          <button
            onClick={() => {
              props.decrement();
            }}
          >
            <HiMinus className="btn" />
          </button>
          <div className="amount-style">{props.Amount}</div>

          <button
            onClick={() => {
              props.increment();
            }}
          >
            <BsPlusLg className="btn" />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin: 1.5rem 0;
  .amount-toggle {
    display: flex;
    align-items: center;
    button {
      line-height: 1;
      border: none;
      padding: 0.5rem;
      margin: 0.5rem;
      font-weight: 600;
    }
    .amount-style {
      font-size: 1.8rem;
      margin: 0 1rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.helper};
    }
  }
`;

export default CartAmount;
