// Header.styled.jsx
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
`;

export const Logo = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 20px;
  font-weight: bold;
`;

export const NavLinks = styled.nav`
  display: flex;
`;

export const NavLink = styled.a`
  margin-right: 15px;
  text-decoration: none;
  color: #333;
`;
