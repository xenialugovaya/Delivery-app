import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import QuantityInput from '../QuantityInput/QuantityInput';
import useQuantity from '../Hooks/useQuantity';
import useCardExpand from '../Hooks/useCardExpand';
import { formatUSDPrice } from '../Data/Data';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '300px',
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

export default function FoodCard({index, parameters, setOrders, orders}) {
  const {title, priceUSD, shortDescription, description, image} = parameters;
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
        !addToCartClicked 
        ? <IconButton aria-label="add to cart" onClick={handleAddToCartClick}>
            <AddCircleIcon fontSize="large" color="primary" />
          </IconButton>
        : <QuantityInput quantity={quantity} onClick={handleQuantityClick}/>
        }
        <Typography>
          {formatUSDPrice(priceUSD)}
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: cardExpand,
          })}
          onClick={handleExpandClick}
          aria-expanded={cardExpand}
          aria-label="show more"
        >
          <ExpandMoreIcon />
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