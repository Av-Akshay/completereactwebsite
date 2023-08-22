import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../reduxToolKit/slices";
import MyLogo from "./MyLogo";

const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <MainHeader>
      <NavLink to="/">
        <MyLogo />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 5rem;
  }
  @media (max-width: 400px) {
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      height: 6rem;
      width: 70%;
    }
  }
`;

export default Header;
