import React from 'react';
import styled from 'styled-components'
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import FoodCard from '../FoodCard/FoodCard';
import { pizzas } from '../Data/Data';
 

const MenuStyle = styled.div`
padding: 60px;
`

class Menu extends React.Component{
  render(){
    return(
      <MenuStyle>
        <Typography variant="h2" component="h1">
          Menu
        </Typography>
        <Grid container spacing={2}>
          {pizzas.map((pizza) => {
            return(
              <Grid item>
              <FoodCard  parameters={pizza}/>
            </Grid> 
            )
          })}    
        </Grid>
      </MenuStyle>
    )
  }
}

export default Menu;