import React from 'react';
import { IconButton } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import styled from 'styled-components'


const NavbarStyle = styled.div`
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
          <Typography variant="h4" component="h1">
            Pizza
          </Typography>
          <Typography variant="overline" component="h1">
            Delivery
          </Typography>
        </Logo>
        <NavMenu>
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </NavMenu>
      </NavbarStyle>
    )
  }
}

export default Navbar;