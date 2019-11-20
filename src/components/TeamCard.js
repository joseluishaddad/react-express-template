import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
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
  },
  media: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: 'rgba(255, 255, 255, 1)',
    borderStyle: 'solid',
    margin: 'auto',
    marginTop: '10px',
  },
  name: {
    marginBottom: '0px',
    fontFamily: 'Montserrat',
  },
  description: {
    paddingTop: '5px',
    fontFamily: 'Montserrat',
  },
});

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default function TeamCard(props) {
  const classes = useStyles();
  const {
    name,
    description,
    picture,
    position,
  } = props
  return (
    <Card className={classes.card}>
      <CardMedia
      className={classes.media}
      image={picture}
      title={name}
      />
      <CardContent>
        <Typography gutterBottom className={classes.name} variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.description}variant="body2" color="textSecondary" component="p">
          {position}
        </Typography>
        <Typography className={classes.description}variant="h6" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}