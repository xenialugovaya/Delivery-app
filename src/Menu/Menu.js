import React from 'react';
import styled from 'styled-components'
import {Grid} from '@material-ui/core';
import { Typography } from '@material-ui/core';


const MenuStyle = styled.div`
padding: 60px;
`

class Menu extends React.Component{
  render(){
    return(
      <MenuStyle>
        <Typography variant="h2" component="h1">
          Menu
        </Typography>
        <Grid container>
        </Grid>
      </MenuStyle>
    )
  }
}

export default Menu;