import React from "react";
import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper>
      <div className="brand-section">
        <div className="container">
          <h3>Trusted By 1000+ Companies</h3>
          <div className="brand-section-slider">
            <div className="slider">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
                alt="trusted-brand"
              />
            </div>
            <div className="slider">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
                alt="trusted-brand"
              />
            </div>
            <div className="slider">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
                alt="trusted-brand"
              />
            </div>
            <div className="slider">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
                alt="trusted-brand"
              />
            </div>
            <div className="slider">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
                alt="trusted-brand"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .brand-section {
    background-color: ${({ theme }) => theme.colors.bg};
    margin-bottom: 15rem;
  }
  h3 {
    text-align: center;
    padding: 10rem 0 0 0;
    font-size: 2.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.heading};
  }
  .brand-section-slider {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 0 3rem 0;
    width: 90%;
    margin: auto;
    flex-wrap: wrap;
    // margin-bottom: 2rem;
  }
  img {
    min-width: 10rem;
    height: 10rem;
  }
  @media (max-width: 310px) {
    .brand-section-slider {
      justify-content: center;
    }
  }
`;

export default Trusted;
