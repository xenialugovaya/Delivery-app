import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Icon } from '@material-ui/core';
import { LocalPizzaTwoTone } from '@material-ui/icons';

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
          <LocalPizzaTwoTone fontSize="large"/>
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