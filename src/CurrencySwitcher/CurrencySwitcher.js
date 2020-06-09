import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { currencies } from '../Data/Data';

  export default function CurrencySwitcher({currency, setCurrency}){

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return(
        <TextField
          id="standard-select-currency"
          select
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    );

  }