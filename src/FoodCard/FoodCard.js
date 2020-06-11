import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions } from '@material-ui/core';
import { Collapse, IconButton, Typography }  from '@material-ui/core';
import { AddCircle, ExpandMore } from '@material-ui/icons';
import QuantityInput from '../QuantityInput/QuantityInput';
import useQuantity from '../Hooks/useQuantity';
import useCardExpand from '../Hooks/useCardExpand';
import { formatUSDPrice, formatEURPrice } from '../Data/Data';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '300px',
  },
  header: {
    minHeight: '64px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function FoodCard({index, parameters, ordersHook, currency, deletedHook}) {
  const { title, priceUSD, shortDescription, description, image } = parameters;
  const { setOrders, orders } = ordersHook;
  const { deletedItemIndex, setDeletedItemIndex } = deletedHook;
  const quantity = useQuantity();
  const { cardExpand, setCardExpand } = useCardExpand();
  const order = {
    id: index,
    title,
    priceUSD,
    quantity: quantity.value
  }

  const classes = useStyles();
  const [addToCartClicked, setAddToCartClicked] = React.useState(false);

  const handleExpandClick = () => {
    setCardExpand(!cardExpand);
  };

  const handleAddToCartClick = () => {
    setOrders([...orders, order]);
    setAddToCartClicked(true); 
    if (deletedItemIndex.find(clicked => clicked === index) !== undefined){
      const newDeletedItems = [...deletedItemIndex];
      const pos = newDeletedItems.findIndex(i => i === index);
      newDeletedItems.splice(pos, 1);
      setDeletedItemIndex([...newDeletedItems]);
      quantity.setValue(1);
      order.quantity = 1;
    }
  };

  const handleQuantityClick = (value) => {
    orders.forEach((order) => {
      if(order.id === index){
        order.quantity = value;
      }
    });
    setOrders([...orders]);
  }
  
  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        title={title}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
           {shortDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {
        !addToCartClicked || deletedItemIndex.find(clicked => clicked === index) !== undefined
          ? <IconButton aria-label="add to cart" onClick={handleAddToCartClick}>
              <AddCircle fontSize="large" color="primary"/>
            </IconButton>
          : <QuantityInput quantity={quantity} onClick={handleQuantityClick}/>
        }
        <Typography>
          { currency === 'USD'
              ? formatUSDPrice(priceUSD)
              : formatEURPrice(priceUSD)
          }
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: cardExpand,
          })}
          onClick={handleExpandClick}
          aria-expanded={cardExpand}
          aria-label="show more"
        >
          <ExpandMore/>
        </IconButton>
      </CardActions>
      <Collapse in={cardExpand} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
             {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}