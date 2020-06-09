import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyle'
import { Grid } from '@material-ui/core';
import Navbar from './Navbar/Navbar';
import Menu from './Menu/Menu';
import Cart from './Cart/Cart';
import useOpenCart from './Hooks/useOpenCart';
import useOrders from './Hooks/useOrders';
import useCurrency from './Hooks/useCurrency';

function App() {
const currency = useCurrency();
const openCartHook = useOpenCart();
const { menuGrid, cartGrid } = openCartHook.openCart;
const orders = useOrders();

  return (
    <>
    <GlobalStyle/>
    <Navbar { ...openCartHook } { ...orders } currency={currency}/>
    <Grid container>
      <Grid item xs={ menuGrid }>
        <Menu orders={ orders } currency={currency}/>
      </Grid>
      <Grid item xs={ cartGrid }>
        <Cart { ...openCartHook } { ...orders } { ...currency }/>
      </Grid>      
    </Grid>
    </>
  );
}

export default App;
