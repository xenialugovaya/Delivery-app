import React from 'react';
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography,Chip } from '@material-ui/core';
import FoodCard from '../FoodCard/FoodCard';
import { menuItems } from '../Data/Data';
 
const MenuStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 120px 60px;
  @media (max-width: 700px) {
    padding: 120px 0px;
    align-items: center;
  }
`
const MenuChips = styled.div`
  padding: 20px;
`

const MenuSection = styled.div`
  
`

const useStyles = makeStyles(() => ({
  sectionTitle: {
    marginTop: '40px',
    marginBottom: '10px',
  },
  section: {
    '@media (max-width: 700px)': {
      display: 'flex',
      flexDirection: 'column',
    },
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
  };

    return(
      <MenuStyle>
        <Typography variant="h2" component="h1">
          Menu
        </Typography>
        <MenuChips>
          {Object.entries(menuItems).map(([sectionName], index) => (
            <Chip key={index} color="primary" className={classes.chip} label={sectionName} onClick={() => handleClick(sectionName)}/>
          ))}
        </MenuChips>  
        {Object.entries(menuItems).map(([sectionName, foods], sectionIndex) => (
          <MenuSection key={sectionIndex}>
            <Typography id={sectionName} className={classes.sectionTitle} variant="h4" component="h3">
              {sectionName}
            </Typography>
            <Grid container spacing={2} className={classes.section}>
              {foods.map((item, itemIndex) => {
                const generatedIndex = parseInt(String(sectionIndex) + String(itemIndex));
                return(
                  <Grid item key={generatedIndex}>
                    <FoodCard index={generatedIndex} parameters={item} ordersHook={orders} {...currency} deletedHook={deleted}/>
                  </Grid> 
                  )
                })}    
            </Grid>
          </MenuSection>
        ))}
      </MenuStyle>
    );
}