import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BsCartCheck } from "react-icons/bs";
import { CgMenu, CgClose } from "react-icons/cg";
import { useSelector } from "react-redux";

const Nav = () => {
  const [menIcon, setmenuIcon] = useState(true);
  const data = useSelector((store) => store.products);
  const { total_item } = data;

  return (
    <Navbar>
      <div className={menIcon ? "navbar" : " navbar active"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              onClick={() => {
                setmenuIcon(true);
              }}
              className="navbar-link"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => {
                setmenuIcon(true);
              }}
              className="navbar-link"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              onClick={() => {
                setmenuIcon(true);
              }}
              className="navbar-link"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => {
                setmenuIcon(true);
              }}
              className="navbar-link"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              onClick={() => {
                setmenuIcon(true);
              }}
              className="navbar-link cart-trolley--link"
            >
              <BsCartCheck className="cart-trolley" />
              <span className="cart-total--item">{total_item}</span>
            </NavLink>
          </li>
        </ul>

        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            onClick={() => {
              setmenuIcon(false);
            }}
            className="mobile-nav-icon menu-outline"
          />
          <CgClose
            name="close-outline"
            onClick={() => {
              setmenuIcon(true);
            }}
            className="mobile-nav-icon close-outline"
          />
        </div>
      </div>
    </Navbar>
  );
};
const Navbar = styled.nav`
  .navbar-lists {
    display: flex;
    gap: 4.8rem;
    align-items: center;
    font-size: 2.5rem;
  }
  .cart-trolley--link {
    position: relative;
  }

  .cart-trolley {
    position: relative;
    font-size: 2.5rem;
  }
  .cart-total--item {
    width: 2.8rem;
    height: 2.6rem;
    background-color: ${({ theme }) => theme.colors.helper};
    // border: 1px solid ${({ theme }) => theme.colors.helper};
    border-radius: 50%;
    color: #000;
    position: absolute;
    top: -100%;
    left: 70%;
    font-size: 1.5rem;
    display: grid;
    place-items: center;
  }
  .navbar-link {
    textr-decoration: none;
    font-size: 1.8rem;
    font-size: 500;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.black};
    transition: color 0.3s linear;
  }
  .navbar-link:hover {
    color: ${({ theme }) => theme.colors.helper};
  }
  .active {
    color: ${({ theme }) => theme.colors.helper};
  }

  .mobile-navbar-btn {
    display: none;
  }
  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: block;
    }

    .mobile-nav-icon {
      position: absolute;
      top: 3.2rem;
      right: 5rem;
      font-size: 3.5rem;
    }
    .navbar-lists {
      height: 100vh;
      visibilty: hidden;
      opacity: 1;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      z-index: 999;
      right: 0;
      background-color: skyblue;
      transform: translateX(100%);
      flex-direction: column;
      transition: all 0.3s linear;
    }
    .active .mobile-navbar-btn .mobile-nav-icon[name="close-outline"] {
      display: block;
      z-index: 999999;
    }

    .active .navbar-lists {
      z-index: 999;
      visibilty: visible;
      opacity: 1;
      transform: translateX(0);
      transition: all 0.3s linear;
    }
  }
`;

export default Nav;
