// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, Logo, NavLinks, NavLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo as={Link} to="/">
        Your Logo
      </Logo>
      <NavLinks>
        <NavLink as={Link} to="/signin">
          Sign In
        </NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
