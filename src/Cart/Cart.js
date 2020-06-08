import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Button } from '@material-ui/core';




const useStyles = makeStyles({
  root: {
    padding: '20px',
    position: 'fixed',
    width: '100%',
    height: '100%',
    margin: '0',
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    maxWidth: '300px',
  }
});

export default function Cart() {
  const classes = useStyles();

     return(
      <Card className={classes.root}>
        <CardHeader title="Your order"/>
        <Button variant="contained" color="primary" className={classes.button}>
          Proceed to checkout
        </Button>
      </Card>        
     );
}