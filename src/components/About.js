import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import '../assets/fonts.css';
import TeamCard from './TeamCard';
import Article from './Article';
import { Link } from "react-router-dom";

import constants from  "../constants.js";

import profile from "../assets/profile.jpeg";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.jpg";

import article1 from "../assets/article1.jpg";
import article2 from "../assets/article2.png";
import article3 from "../assets/article3.jpg";


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
    fontFamily: 'Montserrat',
    minWidth: '300px',
    marginTop: '0px',
    marginBottom: '0px',
    paddingTop: '50px',
    paddingBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px',
    },
  },
  title: {
    color: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'left',
    padding: 'auto',
    marginLeft: '20px',
    marginTop: '40px',
    marginBottom: '20px',
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
      padding: '0px',
      marginLeft: '0px',
      marginTop: '20px',
    },
  },
  titleMobile: {
    color: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'left',
    padding: 'auto',
    marginLeft: '20px',
    marginTop: '40px',
    marginBottom: '20px',
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    display:'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      padding: '0px',
      marginLeft: '0px',
      marginTop: '20px',
      fontSize: '10vw',
    },
  },
  description: {
    padding: '30px',
    lineHeight: '1.6',
    textAlign: 'justify',
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
      padding: '10px',
    },
  },
  quote: {
    fontStyle: 'italic',
    backgroundColor: 'rgba(253, 233, 37, 0.1)',
    borderRadius: '30px',
    padding: '10px',
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
  body: {
    height: '100%',
    width: '100%',
    overflowY: 'scroll',
    paddingLeft: '60px',
    paddingRight: '60px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '50px',
      padding: '30px',
      paddingTop: '0px',
    },
  },
  teamCards: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '50px',
    marginBottom: '50px',
  },
  articles:{
    marginTop: '80px',
  },
  articlesTitle:{
    color: 'rgba(0, 0, 0, 0.7)',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  },
  articleCards: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: '50px',
    marginBottom: '50px',
    paddingLeft: '50px',
    paddingRight: '50px',
  },
  footer: {
    margin: 'auto',
    marginTop: '150px',
    padding: '40px',
    paddingLeft: '80px',
    paddingRight: '80px',
    backgroundColor: 'rgba(253, 0, 77, 1)',
    width: '100%',
    height: '150px',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  footerLink: {
    textAlign: 'center',
    textDecoration: 'none',
    color: 'white',
    margin: 'auto',
    transition: '0.1s',
    '&:hover': {
      color: 'rgba(253, 233, 37, 1)',
      fontWeight: 'bold !important'
    }
  }
}));

export default function Template() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <Typography variant="h2" className={classes.title} >
          SOBRE NOSOTROS
        </Typography>
        <Typography variant="h3" className={classes.titleMobile} >
          SOBRE NOSOTROS
        </Typography>
        <Typography variant="h5" className={classes.description} >
          {constants.about.paragraphs.p1}
        </Typography>
        <div className={classes.teamCards}>
          <TeamCard picture={profile} name={constants.members.m1.name} position={constants.members.m1.position} description={constants.members.m1.description}/>
          <TeamCard picture={profile3} name={constants.members.m2.name} position={constants.members.m2.position} description={constants.members.m2.description}/>
          <TeamCard picture={profile2} name={constants.members.m3.name} position={constants.members.m3.position} description={constants.members.m3.description}/>
        </div>
        <Typography variant="h5" className={classes.description} >
          {constants.about.paragraphs.p2}
        </Typography>
        <Typography variant="h5" className={classes.description} >
          {constants.about.paragraphs.p3}
        </Typography>
        <Typography variant="h6" className={classes.quote} >
          {constants.about.quotes.q1}
        </Typography>
        <div className={classes.articles}>
          <Typography variant="h5" className={classes.articlesTitle}>
            Te invitamos a informarte más a continuación:
          </Typography>
          <div className={classes.articleCards}>
            <Article picture={article1} name='Sence' position="- Programa experiencia mayor -" link="https://sence.gob.cl/empresas/noticias/nuevo-programa-experiencia-mayor-formacion-en-el-puesto-de-trabajo-adultos-mayores"/>
            <Article picture={article2} name='La Segunda' position="- Mecedoras Vacías -" link="http://cache-elastic.emol.com/2019/09/14/RVSB/QG3LKBJO/all"/>
            <Article picture={article3} name='Clapes UC' position="- Cómo vivir bien 100 años -" link="https://ediciones.uc.cl/como-vivir-bien-100-a-os-2045.html"/>
          </div>
        </div>
        <div className={classes.footer}>
          <Link to="/contact" className={classes.footerLink}>
            <Typography variant="overline">
              Contáctanos
            </Typography>
          </Link>
          <Link to="/userForm" className={classes.footerLink}>
            <Typography variant="overline">
              Formulario de Empresas
            </Typography>
          </Link>
          <Link to="/userForm" className={classes.footerLink}>
            <Typography variant="overline">
              Formulario de Usuarios
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  );
}
