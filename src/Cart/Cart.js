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
import { formatUSDPrice, formatEURPrice } from '../Data/Data';
import { deliveryCost } from '../Data/Data';


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
    overflow: 'auto',
  },
  open:{
    display: 'flex',
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  subtotal: {
    background: '#eee',
  }
});

function getPrice(order){
  return order.priceUSD * order.quantity;
}

export default function Cart({openCart, setOpenCart, orders, currency}) {
  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);
  const total = subtotal + deliveryCost;
  const { cartOpen } = openCart;
  const classes = useStyles();
  const handleCloseClick = () => {
    setOpenCart({cartOpen: false});
  };
     return(
      <Card className={clsx(classes.root, {
        [classes.open]: cartOpen,
      })}>
        <CardHeader 
         title="Your order"
         action={
          <IconButton aria-label="close" onClick={handleCloseClick}>
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
                        {
                          currency === 'USD'
                          ? formatUSDPrice(getPrice(order))
                          : formatEURPrice(getPrice(order))
                        } 
                      </Typography> 
                   </ListItem> 
                   <Divider/>
                   </>
                  ))}
                  <ListItem className={clsx(classes.list, classes.subtotal)}>
                    <Typography variant="overline">
                      Subtotal:
                    </Typography> 
                    <Typography variant="overline">
                        {
                          currency === 'USD'
                          ? formatUSDPrice(subtotal)
                          : formatEURPrice(subtotal)
                        }
                    </Typography> 
                  </ListItem>
                  <ListItem className={clsx(classes.list, classes.subtotal)}>
                    <Typography variant="overline">
                      Delivery:
                    </Typography> 
                    <Typography variant="overline">
                        {
                          currency === 'USD'
                          ? formatUSDPrice(deliveryCost)
                          : formatEURPrice(deliveryCost)
                        }
                    </Typography> 
                  </ListItem>
                  <ListItem className={classes.list}>
                    <Typography variant="h5">
                      Total:
                    </Typography> 
                    <Typography variant="h5">
                        {
                          currency === 'USD'
                          ? formatUSDPrice(total)
                          : formatEURPrice(total)
                        }
                    </Typography> 
                  </ListItem>
                </CardContent>
                <Button variant="contained" color="primary" className={classes.button}>
                  Proceed to checkout
                </Button> 
              </>
          } 
      </Card>        
     );
}