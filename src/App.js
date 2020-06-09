import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyle'
import { Grid } from '@material-ui/core';
import Navbar from './Navbar/Navbar';
import Menu from './Menu/Menu';
import Cart from './Cart/Cart';
import useOpenCart from './Hooks/useOpenCart';
import useAddToCart from './Hooks/useAddToCart';
import useOrders from './Hooks/useOrders';

function App() {
const {openCart, setOpenCart} = useOpenCart();
const addToCart = useAddToCart();
const orders = useOrders();

  return (
    <>
    <GlobalStyle/>
    <Navbar setOpenCart = {setOpenCart} {...orders}/>
    <Grid container>
      <Grid item xs={openCart.menuGrid}>
        <Menu {...addToCart} {...orders}/>
      </Grid>
      <Grid item xs={openCart.cartGrid}>
        <Cart cartOpen={openCart.cartOpen} {...orders}/>
      </Grid>      
    </Grid>
   </>
  );
}

export default App;
