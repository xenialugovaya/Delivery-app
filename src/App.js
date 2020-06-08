import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyle'
import { Grid } from '@material-ui/core';
import Navbar from './Navbar/Navbar';
import Menu from './Menu/Menu';
import Cart from './Cart/Cart';

function App() {
  return (
    <>
    <GlobalStyle/>
    <Navbar/>
    <Grid container>
      <Grid item xs={7}>
        <Menu/>
      </Grid>
      <Grid item xs={5}>
        <Cart/>
      </Grid>      
    </Grid>
   </>
  );
}

export default App;
