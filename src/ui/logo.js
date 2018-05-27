import React from 'react';
import styled from 'react-emotion';

import { mq } from './../styles/utils';
import colors from './../styles/colors';

const LogoStyle = styled('div')`
  color: ${colors.cinza};
  font-size: 27px;
  font-weight: 900;

  span {
    color: ${colors.cinzaMedio};
  }
`;

const Completo = styled('div')`
  display: none;
  ${mq.small(`display: block;`)};
`;

const Curto = styled('div')`
  ${mq.small(`display: none;`)};
`;

const Logo = () => (
  <LogoStyle>
    <Completo>
      <span>FRUTAS</span>GOURMET
    </Completo>
    <Curto>
      <span>F</span>GOURMET
    </Curto>
  </LogoStyle>
);

export default Logo;
