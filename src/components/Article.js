import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 300,
    maxHeight: 800,
    borderRadius: 10,
    borderColor: 'rgba(253, 0, 77, 1)',
    borderStyle: 'solid',
    borderWidth: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    margin: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    transition: '0.3s',
    '&:hover':{
      cursor: 'pointer',
      transform: 'scale(1.03)',
    }
  },
  media: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: 'rgba(255, 255, 255, 1)',
    borderStyle: 'solid',
    margin: 'auto',
    transition: '0.3s',
    '&:hover':{
      
    }
  },
  text:{
    padding: '5px',
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  name: {
    color: 'rgba(0, 0, 0, 0.7)',
    marginBottom: '0px',
    fontFamily: 'Montserrat',
  },
  description: {
    paddingTop: '5px',
    fontFamily: 'Montserrat',
  },
  link: {
    color: 'rgba(0, 0, 0, 0.7)',
    textDecoration: 'none',
  }
});

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

export default function TeamCard(props) {
  const classes = useStyles();
  const {
    name,
    picture,
    link,
    position,
  } = props
  return (
    <Card className={classes.card}>
      <a target="_blank" rel="noopener noreferrer" className={classes.link} href={link}>
        <CardActionArea>
          <CardMedia
          className={classes.media}
          image={picture}
          title={name}
          />
          <CardContent className={classes.text}>
            <Typography gutterBottom className={classes.name} variant="h5" component="h2">
              {name}
            </Typography>
            <Typography className={classes.description}variant="body2" color="textSecondary" component="p">
              {position}
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
    </Card>
  );
}