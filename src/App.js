import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyle'
import { Grid } from '@material-ui/core';
import Navbar from './Navbar/Navbar';
import Menu from './Menu/Menu';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import useOpenCart from './Hooks/useOpenCart';
import useOrders from './Hooks/useOrders';
import useCurrency from './Hooks/useCurrency';
import useItemDelete from './Hooks/useItemDelete';
import useCheckout from './Hooks/useCheckout';



function App() {
const currency = useCurrency();
const openCartHook = useOpenCart();
const { menuGrid, cartGrid } = openCartHook.openCart;
const orders = useOrders();
const deleted = useItemDelete();
const checkout = useCheckout();

  return (
    <>
    <GlobalStyle/>
    <Navbar { ...openCartHook } { ...orders } currency={currency}/>
    <Grid container>
        {checkout.checkout 
          ? <Grid item xs={ 7 }>
              <Checkout {...checkout}/>
            </Grid>
          : <Grid item xs={ menuGrid }>
              <Menu orders={ orders } currency={currency} deleted={deleted}/>
            </Grid>
        } 
      <Grid item xs={ cartGrid }>
        <Cart { ...openCartHook } { ...orders } { ...currency } {...deleted} {...checkout}/>
      </Grid>      
    </Grid>
    </>
  );
}

export default App;
