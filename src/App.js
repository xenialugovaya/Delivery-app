import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyle'
import Navbar from './Navbar/Navbar';
import Menu from './Menu/Menu';

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
