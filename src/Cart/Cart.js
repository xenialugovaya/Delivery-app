import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, Button, IconButton, Typography, Divider, ListItem } from '@material-ui/core';
import { HighlightOff, Close } from '@material-ui/icons';
import { formatUSDPrice, formatEURPrice, deliveryCost } from '../Data/Data';

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
    zIndex: 1000,
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
  itemTitle:{
    margin: '0px 10px',
    minWidth: '90px',
  },
  subtotal: {
    background: '#eee',
  },
  quantity: {
    display: 'flex',
    alignItems: 'center',
  },
  price: {
    display: 'flex',
    alignItems: 'center',
  },
});

function getPrice(order){
  return order.priceUSD * order.quantity;
}

export default function Cart({openCartHook, ordersHook, currency, deletedHook, checkoutHook}) {
  const {openCart, setOpenCart} = openCartHook;
  const { cartOpen } = openCart;
  const {orders, setOrders} = ordersHook;
  const {deletedItemIndex, setDeletedItemIndex} = deletedHook;
  const {checkout, setCheckout} = checkoutHook;

  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);
  const total = subtotal + deliveryCost;
  
  const classes = useStyles();

  const handleDeleteClick = (index) => {
    const orderId = orders[index].id;
    setDeletedItemIndex([...deletedItemIndex, orderId]);
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders([...newOrders]);
  };

  const handleCloseClick = () => {
    setOpenCart({checkoutGrid: 12, cartOpen: false});
  };

  const handleProceedToCheckoutClick = () => {
    setCheckout(true);
    setOpenCart({checkoutGrid: 12, cartOpen: false});
  };

    return(
      <Card className={clsx(classes.root, {
        [classes.open]: cartOpen,
      })}>
        <CardHeader 
         title="Your order"
         action={
          <IconButton aria-label="close" onClick={handleCloseClick}>
            <HighlightOff />
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
                  {orders.map((order, index) => (
                    <>
                      <ListItem className={classes.list}>
                        <div className={classes.quantity}>
                          <Typography variant="overline">
                            {order.quantity} 
                          </Typography>   
                          <Typography className={classes.itemTitle} variant="caption">
                            {order.title} 
                          </Typography>
                        </div>  
                        <div className={classes.price}>
                          <Typography variant="overline">
                            {
                              currency === 'USD'
                                ? formatUSDPrice(getPrice(order))
                                : formatEURPrice(getPrice(order))
                            } 
                          </Typography> 
                          <IconButton onClick={() => handleDeleteClick(index)}>
                            <Close fontSize="small"/>
                          </IconButton>
                        </div>
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
                {
                  !checkout &&
                  <Button variant="contained" color="primary" className={classes.button} onClick={handleProceedToCheckoutClick}>
                    Proceed to checkout
                  </Button> 
                }
              </>
          } 
      </Card>        
     );
}