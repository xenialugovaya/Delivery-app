import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyle'
import { Content } from './Styles/Content'
import { Grid } from '@material-ui/core';
import Navbar from './Navbar/Navbar';
import Menu from './Menu/Menu';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import Footer from './Footer/Footer';
import useOpenCart from './Hooks/useOpenCart';
import useOrders from './Hooks/useOrders';
import useCurrency from './Hooks/useCurrency';
import useItemDelete from './Hooks/useItemDelete';
import useCheckout from './Hooks/useCheckout';
import useTitle from './Hooks/useTitle';

function App() {
const currency = useCurrency();
const openCartHook = useOpenCart();
const { menuGrid, checkoutGrid, cartGrid } = openCartHook.openCart;
const orders = useOrders();
const deleted = useItemDelete();
const checkout = useCheckout();
useTitle({...orders, ...checkout});

  return (
    <>
    <GlobalStyle/>
    <Navbar { ...openCartHook } { ...orders } currency={currency}/>
    <Content>
    <Grid container>
        {checkout.checkout 
          ? <Grid item xs={ checkoutGrid }>
              <Checkout {...checkout} { ...orders }/>
            </Grid>
          : <Grid item xs={ menuGrid }>
              <Menu orders={ orders } currency={currency} deleted={deleted}/>
            </Grid>
        } 
      <Grid item xs={ cartGrid }>
        <Cart { ...openCartHook } { ...orders } { ...currency } {...deleted} {...checkout}/>
      </Grid>      
    </Grid>
    </Content>
    <Footer/> 
    </>
  );
}

export default App;
