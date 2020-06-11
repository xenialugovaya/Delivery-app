import React from 'react';
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import MaskedInput from 'react-text-mask';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const CheckoutStyle = styled.div`
  padding: 120px 60px;
`
const useStyles = makeStyles((theme) => ({
  root: {
   background: 'white',
   padding: '20px 65px 20px 40px',
   width: '80%',
   maxWidth: '700px',
   '& > *': {
    margin: theme.spacing(2),
  },
  },
  title: {
    margin: '20px 0px',
  },
}));

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

export default function Checkout({setCheckout, setOrders}){

  const [formData, setFormData] = React.useState({'userName': '', 'userSurname': '', 'address': '', 'phone': '', 'submitted': false});
  
  const classes = useStyles(); 

  const handleButtonClick = () => {
    setCheckout(false);
  };

  const [values, setValues] = React.useState({
    textmask: '(   )    -    ',
  });

  const handleMaskedInput = (event) => {
    setValues({
      textmask: event.target.value,
    });
    formData.phone = event.target.value;
    formData.phoneError = false;
    setFormData({...formData});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formData.error = 0;
    for (let key in formData){
      if(formData[key] === ''){
        formData[key + 'Error'] = true;
        formData.error++;
      }
    }
    console.log(formData);
    console.log(formData.error);
    setFormData({...formData})
    if (!formData.error){
      formData.submitted = true;
      setFormData({...formData})
      setOrders([]);
    }
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    formData[name] = value;
    formData[name + 'Error']= false;
    setFormData({...formData});
  }

  return(
    <CheckoutStyle>
      <Button variant="contained" color="secondary" onClick={handleButtonClick}>
        Back to Menu
      </Button>
      {!formData.submitted  
        ?<>
          <Typography className={classes.title} variant="h2" component="h1">
            Order registration
           </Typography> 
          <form className={classes.root} onSubmit={handleSubmit}>
            <TextField 
              name="userName" 
              label="Name" 
              onChange={handleInputChange}
              error={formData.userNameError} 
              helperText={formData.userNameError && "Please enter your name"}
            />
            <TextField 
              name="userSurname" 
              label="Surname" 
              onChange={handleInputChange}
              error={formData.userSurnameError}
              helperText={formData.userSurnameError && "Please enter your surname"}
            />
            <FormControl error={formData.phoneError}>
              <InputLabel htmlFor="phone-number">Phone number</InputLabel>
              <Input
                value={values.textmask}
                onChange={handleMaskedInput}
                name="phone"
                fullWidth
                inputComponent={TextMaskCustom}
              />
              {formData.phoneError && <FormHelperText>Please enter your phone number</FormHelperText>}
            </FormControl>
            <TextField 
              fullWidth 
              name="address" 
              label="Delivery address" 
              onChange={handleInputChange}
              error={formData.addressError}
              helperText={formData.addressError && "Please enter delivery address"}
            />
            <Typography variant="overline">
              Comment
            </Typography>
            <TextField 
              fullWidth 
              multiline
              name="comment" 
              label="Leave a comment" 
              variant="filled" 
              onChange={handleInputChange}
            />
            <Button type="submit" variant="contained" color="primary">
              Place order
            </Button>
          </form>
          </>
        : <Typography className={classes.title} variant="h2" component="h1">
            Your order was received! Thank you!
          </Typography>
      }
    </CheckoutStyle>
  );
}