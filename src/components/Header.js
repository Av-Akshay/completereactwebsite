import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';


const Header = () => {
    return (
        <MainHeader>
            <NavLink to="/">
                <img src="./images/logo.png" alt="my logo" />
            </NavLink>
            <Nav />
        </MainHeader>
    )
};
const MainHeader = styled.header`
padding: 0 4.8rem;
height: 10rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
.logo{
    height:5rem;
}
@media (max-width:400px){
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        height: 6rem;
        width: 70%;
    }
}

`;

export default Header;