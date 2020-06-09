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
  position: fixed;
  right: 0px;
  left:0px;
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

export default function Navbar({setOpenCart, orders}){

  let amount = 0;
  if(orders.length === 0){
    amount = 0;
  } else {
    orders.forEach((order) => {
      amount += order.quantity;
    });
  }
  
  const handleCartClick = () => {
    setOpenCart({menuGrid: 10, cartGrid: 2, cartOpen: true});
  };

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
          <IconButton color="primary" aria-label="add to shopping cart" onClick={handleCartClick}>
            <Badge badgeContent={amount} color="secondary">
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
        </NavMenu>
      </NavbarStyle>
    )
}
