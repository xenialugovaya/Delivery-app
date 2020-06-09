import React from 'react';
import styled from 'styled-components'
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import FoodCard from '../FoodCard/FoodCard';
import { pizzas } from '../Data/Data';
 

const MenuStyle = styled.div`
  padding: 120px 60px;
`

export default function Menu({setAddToCart, addToCart, setOrders, orders}) {
    return(
      <MenuStyle>
        <Typography variant="h2" component="h1">
          Menu
        </Typography>
        <Grid container spacing={2}>
          {pizzas.map((pizza, index) => {
            return(
            <Grid item key={index}>
              <FoodCard index={index} parameters={pizza} setAddToCart={setAddToCart} addToCart={addToCart} setOrders={setOrders} orders={orders}/>
            </Grid> 
            )
          })}    
        </Grid>
      </MenuStyle>
    );
}