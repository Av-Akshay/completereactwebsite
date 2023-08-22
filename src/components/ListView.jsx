import React from "react";
import styled from "styled-components";
// import ListProducts from "./ListProducts";
import ListProducts from "./ListProduct";

const Listview = ({ products }) => {
  return (
    <Wrapper className="section">
      <div className="container grid">
        {products.map((curElm) => {
          return <ListProducts key={curElm.id} {...curElm} />;
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    max-width: 60rem;
    margin: 8rem auto 5rem auto;
  }
  .grid {
    gap: 3rem;
  }
`;

export default Listview;
