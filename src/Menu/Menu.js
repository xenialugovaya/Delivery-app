import React from 'react';
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import FoodCard from '../FoodCard/FoodCard';
import { menuItems } from '../Data/Data';
 

const MenuStyle = styled.div`
  padding: 120px 60px;
`
const MenuChips = styled.div`
  padding: 20px;
`

const useStyles = makeStyles(() => ({
  section: {
   marginTop: '40px',
   marginBottom: '10px',
  },
  chip: {
    margin: '5px',
  }
}));

export default function Menu({orders, currency, deleted}) {
  const classes = useStyles();

  const handleClick = (sectionName) => {
    anchorScorll(sectionName);
  };

  const anchorScorll = (anchor) => {
    if(anchor){
       let anchorElement = document.getElementById(anchor)
       anchorElement.scrollIntoView({behavior: 'smooth'});
 
    }
 }

    return(
      <MenuStyle>
        <Typography variant="h2" component="h1">
          Menu
        </Typography>
        <MenuChips>
          {Object.entries(menuItems).map(([sectionName]) => (
            <Chip color="primary" className={classes.chip} label={sectionName} onClick={() => handleClick(sectionName)}/>
          ))}
        </MenuChips>  
        {Object.entries(menuItems).map(([sectionName, foods]) => (
          <>
            <Typography id={sectionName} className={classes.section} variant="h4" component="h3">
              {sectionName}
            </Typography>
            <Grid container spacing={2}>
              {foods.map((item, index) => {
                return(
                  <Grid item key={index}>
                    <FoodCard index={index} parameters={item} { ...orders } {...currency} {...deleted}/>
                  </Grid> 
                  )
                })}    
        </Grid>
          </>
        ))}
        
      </MenuStyle>
    );
}