import React from 'react';
import styled from 'styled-components'
import {Badge} from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CurrencySwitcher from '../CurrencySwitcher/CurrencySwitcher';
import Logo from '../Logo/Logo';


const NavbarStyle = styled.div`
  position: fixed;
  right: 0px;
  left:0px;
  background: white;
  padding: 15px 25px;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 15px 10px -15px #111; 
  z-index: 1000;   
`;

export const LogoStyle = styled.div`
  border-right: 1px solid grey;
  padding-right: 25px;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid grey;
  padding-left: 25px;
`;

export default function Navbar({setOpenCart, orders, currency}){

  let amount = 0;
  if(orders.length !== 0){
    orders.forEach((order) => {
      amount += order.quantity;
    });
  }
  
  const handleCartClick = () => {
    setOpenCart({menuGrid: 10, checkoutGrid: 8, cartGrid: 2, cartOpen: true});
  };

    return (
      <NavbarStyle>
        <LogoStyle>
          <Logo/>
        </LogoStyle>
        <NavMenu>
          <CurrencySwitcher {...currency}/>
          <IconButton color="primary" aria-label="add to shopping cart" onClick={handleCartClick}>
            <Badge badgeContent={amount} color="secondary">
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
        </NavMenu>
      </NavbarStyle>
    )
}
