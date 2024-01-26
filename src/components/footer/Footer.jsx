// Footer.jsx
import React from 'react';
import { FooterContainer } from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} Your Web App
    </FooterContainer>
  );
};

export default Footer;
