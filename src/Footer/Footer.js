import React from 'react';
import {Divider} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import styled from 'styled-components'
import Logo from '../Logo/Logo';

const FooterStyle = styled.footer`
    background: white;
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