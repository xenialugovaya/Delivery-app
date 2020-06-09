import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import clsx from 'clsx';
import { formatUSDPrice } from '../Data/Data';


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
    display: 'flex',
    flexDirection: 'column',
  },
  open:{
    display: 'flex',
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

function getPrice(price, quantity){
  return price * quantity;
}

export default function Cart({cartOpen, orders}) {
  let open = cartOpen;
  const classes = useStyles();
 
     return(
      <Card className={clsx(classes.root, {
        [classes.open]: open,
      })}>
        <CardHeader 
         title="Your order"
         action={
          <IconButton aria-label="close">
            <HighlightOffIcon />
          </IconButton>
          } 
        />       
          {orders.length === 0 
            ? <CardContent className={classes.content}>
                <Typography variant="overline">
                  Your cart is empty
                </Typography>  
              </CardContent>
            : <>
                <CardContent className={classes.content}>
                  {orders.map((order) => (
                    <>
                    <ListItem className={classes.list}>
                    <Typography variant="overline">
                        {order.quantity} 
                      </Typography>   
                      <Typography variant="overline">
                        {order.title} 
                      </Typography>  
                      <Typography variant="overline">
                        {formatUSDPrice(getPrice(order.priceUSD, order.quantity))} 
                      </Typography> 
                   </ListItem> 
                   <Divider/>
                   </>
                  ))}
                </CardContent>
                <Button variant="contained" color="primary" className={classes.button}>
                  Proceed to checkout
                </Button> 
              </>
          } 
      </Card>        
     );
}