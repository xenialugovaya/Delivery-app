import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyle'
import { Grid } from '@material-ui/core';
import Navbar from './Navbar/Navbar';
import Menu from './Menu/Menu';
import Cart from './Cart/Cart';

function App() {

const [openCart, setOpenCart] = React.useState({ menuGrid: 12, cartGrid: 0, cartOpen: false });
const [addToCart, setAddToCart] = React.useState(0);

  return (
    <>
    <GlobalStyle/>
    <Navbar setOpenCart = {setOpenCart} addToCart={addToCart}/>
    <Grid container>
      <Grid item xs={openCart.menuGrid}>
        <Menu setAddToCart= {setAddToCart} addToCart={addToCart}/>
      </Grid>
      <Grid item xs={openCart.cartGrid}>
        <Cart cartOpen={openCart.cartOpen}/>
      </Grid>      
    </Grid>
   </>
  );
}

export default App;
