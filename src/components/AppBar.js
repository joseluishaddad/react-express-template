import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../assets/logo.gif';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  links: {

  },
  link: {
    color: 'black',
    fontSize: '15px',
    padding: '10px',
    paddingTop: '5px',
    paddingBottom: '5px',
    margin: '5px',
    textDecoration: 'none',
    backgroundColor: 'white',
    borderRadius: '5px',
    transition: '0.2s',
    '&:hover': {
      backgroundColor: 'rgba(253, 0, 77, 1)',
      color: 'white',
    },
    [theme.breakpoints.down('sm')]: {
      backgroundColor: 'rgba(253, 0, 77, 0.7)',
      color: 'white',
      fontSize: '12px',
      padding: '10px',
      paddingTop: '10px',
      paddingBottom: '10px',
      margin: '2px',
    },
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: '1000000',
    boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.1), 0 2px 20px 0 rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-around',
    },
  },
  appbar: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 1)10%, rgba(193, 212, 217, 0.05))',
    zIndex: '1000000',
    transition: '0.5s',
    '&:hover': {
      backgroundColor: 'rgba(193, 212, 217, 0.2)',
    },
  },
  title: {
    cursor: 'pointer',
    transition: '1s',
    '&:hover': {
      color: 'rgba(253, 233, 37, 1)',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" className={classes.appbar} >
        <Toolbar variant="dense" className={classes.navbar}>
          <Link className={classes.title} to="/">
            <img src={logo} alt="Home" height="40px"></img>
          </Link>
          <div className={classes.links}>
          <Link className={classes.link} to="/">INICIO</Link>
          <Link className={classes.link} to="/about">NOSOTROS</Link>
          <Link className={classes.link} to="/organizationForm">EMPRESAS</Link>
          <Link className={classes.link} to="/contact">CONTACTO</Link>
            {/*<Button className={classes.menuButton} onClick={() => handleClick('home')} color="inherit">Inicio</Button>
            <Button className={classes.menuButton} onClick={() => handleClick('about')} color="inherit">Nosotros</Button>
            <Button className={classes.menuButton} onClick={() => handleClick('contact')} color="inherit">Contacto</Button> */}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
