import React from "react";
import { Button } from "../style/Button";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1>404</h1>
        <h2>UH OH! You're lost.</h2>
        <p>
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the butoon to go back to the homepage.
        </p>
        <NavLink to="/">
          <Button> HOME</Button>
        </NavLink>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    p {
      font-size: 2rem;
      font-weight: 600;
      text-align: center;
    }
  }
`;

export default Error;
