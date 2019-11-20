import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import '../assets/fonts.css';

import constants from  "../constants.js"

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: '100%',
    height: '100vh',
    position: 'absolute',
    top: '0',
    fontFamily: 'Bree Serif',
    minWidth: '300px',
    paddingLeft: '90px',
    paddingRight: '90px',
    marginTop: '0px',
    padding: '40px',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      alignItems: 'flex-start',
      padding: '30px',
    },
  },
  title: {
    color: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'left',
    padding: 'auto',
    marginBottom: '20px',
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  titlemobile: {
    display: 'none',
    color: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'left',
    padding: 'auto',
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('sm')]: {
      display: 'inline',
      fontSize: '10vw',
    },
  },
  header: {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '10px',
      marginTop: '10px',
    },
  },
  subtitle: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 'auto',
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('sm')]: {
      fontSize: '6vw',
    },
  },
  description: {
    padding: '10px',
    textAlign: 'left',
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('sm')]: {
      fontSize: '6vw',
    },
  },
  datos: {
    borderLeftStyle: 'solid',
    borderLeftWidth: '15px',
    borderLeftColor: 'rgba(253, 233, 37, 0.9)',
    borderRadius: '10px',
    marginLeft: '60px',
    marginRight: '60px',
    padding: '10px', 
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0px',
      marginLeft: '0px',
      marginTop: '0px',
      borderLeftWidth: '5px',
      borderRadius: '5px',
    },
  },
  dato: {
    marginBottom: '10px',
    marginLeft: '10px',
  },
  textoDatos: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

export default function Template() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h2" className={classes.title} >
          CONTACTO
        </Typography>
        <Typography variant="h2" className={classes.titlemobile} >
          CONTACTO
        </Typography>
        <Typography variant="h5" className={classes.description} >
            {constants.contact.description}
        </Typography>
      </div>
      <div className={classes.datos}>
        <div className={classes.dato}>
            <Typography variant="h4" className={classes.subtitle} >
              Correo electrónico
            </Typography>
          <div className={classes.textoDatos}>
            <SvgIcon>
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </SvgIcon>
            <Typography variant="h5" className={classes.description} >
              {constants.contact.email}
            </Typography>
          </div>
        </div>
        <div className={classes.dato}>
          <Typography variant="h4" className={classes.subtitle} >
            Teléfono Fijo
          </Typography>
          <div className={classes.textoDatos}>
            <SvgIcon>
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </SvgIcon>
            <Typography variant="h5" className={classes.description} >
              {constants.contact.phone}
            </Typography>
          </div>
        </div>
        <div className={classes.dato}>
          <Typography variant="h4" className={classes.subtitle} >
            Teléfono Celular
          </Typography>
          <div className={classes.textoDatos}>
            <SvgIcon>
            <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
            </SvgIcon>
            <Typography variant="h5" className={classes.description} >
              {constants.contact.celphone}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
