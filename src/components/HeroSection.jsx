import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Img from "../assets/images/hero.jpg";

const HeroSection = (props) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome To</p>
            <h1> {props.name}</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate odio temporibus ea odit consequuntur, magnam sapiente
              dignissimos. Non nam, voluptatem voluptatum, incidunt impedit esse
              dolore magnam facilis ut officia ducimus dolores praesentium
              distinctio iste.
            </p>
            <NavLink>{/* <Button> Show Now</Button> */}</NavLink>
          </div>
          <div className="hero-section-image">
            <figure>
              <img src={Img} alt="hero-section" className="img-style" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 12rem 0;
  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-decoration: capitalize;
      font-weight: bold;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figure {
    position: relative;
  }

  figure::after {
    content: "";
    width: 70%;
    height: 80%;
    background-color: rgba(81, 56, 238, 0.4);
    position: absolute;
    left: 20%;
    top: -5rem;
    z-index: -1;
  }

  .img-style {
    width: 80%;
    margin: auto;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container {
      padding: 0 1.2rem;
    }
    .grid {
      gap: 8rem;
    }

    figure::after {
      content: "";
      width: 60%;
      height: 90%;
      left: 30%;
      top: -4rem;
      background-color: rgba(81, 56, 238, 0.4);
    }
    .hero-section-data {
      h1 {
        font-size: 5.5rem;
      }
      p {
        font-size: 1.5rem;
        display: flex;
        flex-wrap: wrap;
      }
    }
  }

  .hero-section-image {
    padding: 0 0 0 5rem;
  }
`;

export default HeroSection;
