import React from 'react';
import LocalPizzaTwoToneIcon from '@material-ui/icons/LocalPizzaTwoTone';
import {Grid} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Icon } from '@material-ui/core';


export default function Logo(){
    return(
        <Grid container spacing={2}>
           <Grid item>
             <Icon color="primary">
               <LocalPizzaTwoToneIcon fontSize="large"/>
             </Icon>
           </Grid>
           <Grid item>
             <Typography variant="h4">
               Pizza
             </Typography>
             <Typography variant="overline">
               Delivery
             </Typography>
           </Grid>
         </Grid>
    );
}