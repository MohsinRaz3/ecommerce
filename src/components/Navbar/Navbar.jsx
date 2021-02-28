import React from'react';
import { AppBar, Toolbar, IconButton, Badge, Typography ,Button} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Navbar/logo_easeb.png';
import useStyles from './styles';



const Navbar =({totalItems})=>{
const classes = useStyles();
const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>

          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="easecad"  className={classes.image} /> 
          </Typography>
         

          

          <Button component={Link} to="/" className={classes.buttonpad}> Home</Button>
          <Button className={classes.buttonpad}>Services</Button>
          <Button className={classes.buttonpad}>About us</Button>
          <Button component={Link} to="/ContactUs" className={classes.buttonpad}>Contact us</Button>
          <Button component={Link} to="/SignIn" color="primary" className={classes.buttonpad} variant='outlined'>
            login / SignUp
          </Button>

          <div className={classes.grow} />

          {location.pathname ==='/' && (

          <div className={classes.button}>

            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">

              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>

            </IconButton>

          </div>)}
         
        </Toolbar>

      </AppBar>
    </>
  );
}

export default Navbar;
