import React from 'react';
import {Button} from '@material-ui/core';
import { createGlobalStyle } from 'styled-components'
import Navbar from './Navbar/Navbar';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

function App() {
  return (
    <>
    <GlobalStyle/>
    <Navbar/>
    <Button variant="contained">
      Hello
    </Button>

   </>
  );
}

export default App;
