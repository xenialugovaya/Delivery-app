import React from 'react';
import styled from 'styled-components'
import { Typography,Divider } from '@material-ui/core';
import Logo from '../Logo/Logo';

const FooterStyle = styled.footer`
  width: 100%;
  background: white;
  flex: 0 0 auto;
`;

const FooterMenu = styled.div`
  padding: 30px 60px;
`;

const FooterLogoStyle = styled.div`
  filter: grayscale(100%);
`;

const Copyright = styled.div`
  padding: 10px 60px
`;

export default function Footer(){
  return(
    <FooterStyle>
      <FooterMenu>
        <FooterLogoStyle>
          <Logo/>
        </FooterLogoStyle>
      </FooterMenu>
      <Divider/>
      <Copyright>
        <Typography variant="caption">
          © All rights reserved
        </Typography>
      </Copyright>
     </FooterStyle> 
  );
}