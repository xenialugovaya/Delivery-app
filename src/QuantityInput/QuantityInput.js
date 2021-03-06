import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { InputBase, FormControl, IconButton }  from '@material-ui/core';
import { AddOutlined, RemoveOutlined } from '@material-ui/icons';

const QuantityInputStyle = styled.div`
  background: #eee;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 40px;
  margin: 9.5px;
`;

const useStyles = makeStyles(() => ({

  input: {
    width: '24px',
    height: '40px',
    marginLeft: '10px',
    textAlign: 'center',
  },
  controls: {
    '&:hover': {
      background: 'transparent',
    },
    '&:disabled':{
      opacity: 0.3,
    }
  }
}));

export default function QuantityInput({quantity, onClick}){
  const classes = useStyles();

  const handleDecrementClick = () =>  {
    quantity.setValue(quantity.value - 1);
    onClick(quantity.value - 1);
  };

  const handleIncrementClick = () =>  {
    quantity.setValue(quantity.value + 1);
    onClick(quantity.value + 1);
  };

  const quantityOnChange = (event) => {
    if (!(+event.target.value >= 1)) {
      quantity.setValue(1);
      return;
    }
    quantity.setValue(+event.target.value);
    onClick(+event.target.value);
  }

  return(
    <QuantityInputStyle>
      <IconButton className={classes.controls} onClick={handleDecrementClick} disabled={quantity.value === 1}>
        <RemoveOutlined color="primary"/>
      </IconButton>
        <FormControl variant="filled" className={classes.root}>   
          <InputBase className={classes.input} value={quantity.value} onChange={(event) => quantityOnChange(event)} />
        </FormControl>
      <IconButton className={classes.controls} onClick={handleIncrementClick}>
        <AddOutlined color="primary"/>
      </IconButton>
    </QuantityInputStyle>
  );
}
