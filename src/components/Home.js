import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
/*import Button from '@material-ui/core/Button';*/
import '../assets/fonts.css';

import constants from  "../constants.js"

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '55%',
    minWidth: '300px',
    padding: '0px',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      minWidth: '300px',
      margin: 'auto',
      marginTop: '0px',
    },
  },
  user: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    minWidth: '500px',
    marginTop: '20px',
    padding: '40px',
    paddingBottom: '0px',
    borderRadius: '15px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    transition: '0.2s',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '300px',
      padding: '20px',
      paddingBottom: '0px',
    },
  },
  title: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: 'bold',
    fontSize: '80px',
    textAlign: 'center',
    marginBottom: '10px',
    padding: 'auto',
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('sm')]: {
      whiteSpace: 'nowrap',
      display: 'none',
    },
  },
  titlemobile: {
    display: 'none',
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 'auto',
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('sm')]: {
      display: 'inline',
      whiteSpace: 'nowrap',
    },
  },
  titleFoot:{
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 'auto',
    fontFamily: 'Montserrat',
  },
  subtitle: {
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    padding: '5px',
    paddingBottom: '10px',
    fontFamily: 'Montserrat',
  },
  subtitle2: {
    color: 'black',
    textAlign: 'center',
    padding: '20px',
    paddingBottom: '0px',
    fontFamily: 'Montserrat',
  },
  userLink: {
    padding: 'auto',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    textDecoration: 'none',
    color: 'inherit',
  },
  userBtn: {
    position: 'static',
    width: '40%',
    minWidth: '250px',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 'auto',
    marginTop: '20px',
    marginBottom: '5px',
    backgroundColor: 'rgba(253, 0, 77, 0.8)',
    color: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '50px',
    transition: '0.2s',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      color: 'white',
      width: '45%',
      height: '90px',
      borderRadius: '55px',
      marginTop: '15px',
      marginBottom: '0px',
    },
  },
  organization: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    minWidth: '500px',
    height: '40px',
    marginTop: '10px',
    margin: 'auto',
    padding: '3px',
    paddingLeft: '20px',
    paddingRight: '20px',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: '1px',
    borderRadius: '20px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      minWidth: '300px',
      margin: 'auto',
      marginTop: '20px',
      marginBottom: '20px',
    },
  },
  orgBtn: {
    position: 'static',
    display: 'flex',
    allignItem: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: 'bold',
    transition: '0.3s',
    height: '30px',
    padding: '0px',
    marginLeft: '10px',
    fontSize: '18px',
    borderRadius: '15px',
    '&:hover': {
      backgroundColor: 'rgba(255, 200, 0, 1)',
      borderStyle: 'solid',
      borderColor: 'white',
      color: 'rgba(0, 0, 0, 1)',
    },
  },
  title2: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 'auto',
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  title2mobile: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 'auto',
    fontFamily: 'Montserrat',
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      marginBottom: '20px',
      color: 'black',
    },
  },
  orgLink: {
    color: 'rgba(253, 0, 77, 1)',
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 'auto',
    marginLeft: '5px',
    fontFamily: 'Montserrat',
    transition: '0.3s',
    '&:hover': {
      color: 'rgba(253, 233, 37, 1)',
    }
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '40px',

  },
  footer: {
    display: 'flex',
    marginBottom: '40px',
  },
  description: {
    padding: '10px',
    textAlign: 'left',
    fontFamily: 'Montserrat',
  },
}));

export default function Home(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.user}>
        <div className={classes.header}>
          <Typography variant="h1" className={classes.title} >
            ACTITUD 60
          </Typography>
          <Typography variant="h3" className={classes.titlemobile} >
            Actitud 60
          </Typography>
          <Typography variant="h5" className={classes.titleFoot} >
            {constants.home.subtitle}
          </Typography>
          <Typography variant="h5" className={classes.subtitle} >
            Buscamos profesionales mayores de 60 años que tengan actitud positiva, sean pro activos y quieran seguir trabajando <span role="img" aria-label="flexed-bicep">💪</span> <br/><b>¿Te sientes identificado? ¡Trabaja con nosotros!</b> Haz click sobre el botón a continuación y sigue las instrucciones:
          </Typography>
          <div className={classes.userBtn}>
            <Link className={classes.userLink} to="/userForm">FORMULARIO</Link>
            {/*<Button color="inherit" className={cla sses.userBtn} onClick={() => handleClick('userForm')} >Formulario</Button>*/}
          </div>
        </div>
      </div>
      <div className={classes.organization}>
        <div className={classes.footer}>
          <Typography variant="h6" className={classes.title2} >
            Si estás buscando gente para contratar, haz click
          </Typography>
          <Typography variant="h5" className={classes.title2mobile} >
            Busca gente
          </Typography>
          <Typography variant="h6">
            <Link className={classes.orgLink} to="/organizationForm"> aquí</Link>
          </Typography>
        </div>
      </div>
    </div>
  );
}
