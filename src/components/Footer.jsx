import React from "react";
import styled from "styled-components";
import { Button } from "../style/Button";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get Started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <Button>
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Akshay Chauhan</h3>
            <p>Loram ipsum dolar, sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input type="email" placeholder="your e-mail" />
              <input type="Submit" defaultValue="SubScribe" />
            </form>
          </div>
          <div className="footer-social">
            <h3>Follow us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube className="icons" />{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>
              {" "}
              <a href="tel:1234567898">+91 1234567898</a>
            </h3>
          </div>
        </div>
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              ⓒ {new Date().getUTCFullYear()} AkshayChauhan. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.footer_bg};
  position: relative;
  padding-top: 2rem;
  margin-top: 10rem;
  height: auto;
  .contact-short {
    width: 80%;
    border-radius: 1rem;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.bg};
    left: 50%;
    top: -15%;
    transform: translateX(-50%);
  }

  .grid-two-column {
    place-items: center;
    height: 10rem;
    align-items: center;
  }
  .container {
    padding: 5rem 2rem 2rem 2rem;
    // color: #fff;
  }
  .footer-about {
    color: #fff;
    display: flex;
    // justify-content: center;
    gap: 2rem;
    flex-direction: column;
  }
  .footer-about p {
    color: #fff;
  }
  .footer-subscribe {
    color: #fff;
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-direction: column;
  }
  .footer-social {
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .footer-social--icons {
    display: flex;
    gap: 1rem;

    .icons {
      border: 0.1rem solid #fff;
      border-radius: 50%;
      padding: 0.5rem;
      height: 3rem;
      width: 3rem;
    }
    a {
      text-decoratoion: none;
      color: #fff;
    }
  }
  .footer-contact {
    color: #fff;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    h3 {
      a {
        color: #fff;
      }
    }
  }
  .footer-bottom--section {
    margin-top: 2rem;
    .container {
      margin-top: 2rem;
      padding: 0;
      height: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        color: #fff;
        text-align: center;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      top: -10%;
      .grid-two-column {
        grid-template-columns: repeat(2, 1fr);
      }
      .grid {
        gap: 1.2rem;
      }
    }
  }
  @media (max-width: 400px) {
    .contact-short {
      top: -15%;
      .grid-two-column {
        grid-template-columns: 1fr;
        height: 12rem;
      }
    }
    footer {
      .container {
        text-align: center;
      }
    }
    .footer-social--icons {
      justify-content: center;
    }
  }
`;
export default Footer;
