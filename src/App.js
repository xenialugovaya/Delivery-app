import React from 'react';
import { createGlobalStyle } from 'styled-components'
import Navbar from './Navbar/Navbar';
import Menu from './Menu/Menu';

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
    <Menu/>
   </>
  );
}

export default App;
