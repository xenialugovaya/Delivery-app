import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { currencies } from '../Data/Data';


const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      width: '35%',
    },
  },
}));

  export default function CurrencySwitcher({currency, setCurrency}){

    const classes = useStyles();

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return(
        <TextField
          className={classes.root}
          id="standard-select-currency"
          select
          value={currency}
          onChange={handleChange}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    );

  }