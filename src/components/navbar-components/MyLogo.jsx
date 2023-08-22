import React from "react";
// import { styled } from "styled-components";
import styled from "styled-components";

const MyLogo = () => {
  return (
    <Wrapper>
      <div className="box">
        <div className="my"> MY</div>
        <div className="store">STORE</div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 0.5rem;
  border: 0.3rem solid black;
  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    .my {
      color: white;
      background-color: blue;
      font-size: 2rem;
      width: 6rem;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .store {
      color: black;
      padding: 1rem;
      font-size: 2rem;
    }
  }
`;
export default MyLogo;
