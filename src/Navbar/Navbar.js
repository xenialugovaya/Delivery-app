import React from 'react';
import {Grid} from '@material-ui/core';
import {Badge} from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Icon } from '@material-ui/core';
import LocalPizzaTwoToneIcon from '@material-ui/icons/LocalPizzaTwoTone';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import styled from 'styled-components'


const NavbarStyle = styled.div`
  background: white;
  padding: 15px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 15px 10px -15px #111;    
`
const Logo = styled.div`
  border-right: 1px solid grey;
  padding-right: 25px;
`

const NavMenu = styled.div`
  border-left: 1px solid grey;
  padding-left: 25px;
`

class Navbar extends React.Component{
  render(){
    return (
      <NavbarStyle>
        <Logo>
         <Grid container spacing={2}>
            <Grid item>
              <Icon color="primary">
                <LocalPizzaTwoToneIcon fontSize="large"/>
              </Icon>
            </Grid>
            <Grid item>
              <Typography variant="h4">
                Pizza
              </Typography>
              <Typography variant="overline">
                Delivery
              </Typography>
            </Grid>
          </Grid>
        </Logo>
        <NavMenu>
          <IconButton color="primary" aria-label="add to shopping cart">
            <Badge badgeContent={4} color="secondary">
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
        </NavMenu>
      </NavbarStyle>
    )
  }
}

export default Navbar;