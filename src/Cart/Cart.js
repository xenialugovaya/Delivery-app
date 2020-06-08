import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    padding: '20px',
    position: 'fixed',
    width: '320px',
    top: '102px',
    bottom: '0px',
    right: '0px',
    display: 'none',
    flexDirection: 'column',
  },
  button: {
    maxWidth: '300px',
  },
  content: {
    height: '100%', 
  },
  open:{
    display: 'flex',
  }
});

export default function Cart({cartOpen}) {
  const open = cartOpen;
  const classes = useStyles();

     return(
      <Card className={clsx(classes.root, {
        [classes.open]: open,
      })}>
        <CardHeader title="Your order"/>
          <CardContent className={classes.content}>
            <Typography variant="overline">
              Your order is empty
            </Typography>
        </CardContent>
        <Button variant="contained" color="primary" className={classes.button}>
          Proceed to checkout
        </Button>  
      </Card>        
     );
}