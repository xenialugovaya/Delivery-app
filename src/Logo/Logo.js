import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LocalPizzaTwoToneIcon from '@material-ui/icons/LocalPizzaTwoTone';
import {Grid} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Icon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  text: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

export default function Logo(){

  const classes = useStyles();

  return(
      <Grid container spacing={2}>
        <Grid item>
         <Icon color="primary">
           <LocalPizzaTwoToneIcon fontSize="large"/>
         </Icon>
       </Grid>
       <Grid item className={classes.text}>
         <Typography variant="h4">
           Pizza
          </Typography>
          <Typography variant="overline">
            Delivery
          </Typography>
        </Grid>
      </Grid>
  );
}