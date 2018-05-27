import React from 'react';
import styled from 'react-emotion';

import Logo from './../ui/logo';
import colors from './../styles/colors';

const FooterStyled = styled('div')`
  width: 100%;
  background: ${colors.amarelo};
  margin-top: 60px;
  padding: 30px 0;
  text-align: center;

  p {
    margin: 0;
  }
`;

const Footer = () => (
  <FooterStyled>
    <Logo />
    <p>
      <small>Copyright © {new Date().getFullYear()} FRUTASGOURMET Inc.</small>
    </p>
  </FooterStyled>
);

export default Footer;
