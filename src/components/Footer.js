import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    color: 'rgba(255, 255, 255, 0.7)',
    bottom: '0px',
    width: '100%',
    height: '16px',
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Typography variant="caption">
            {'Built by '}
            <Link color="inherit" href="mailto:jlhaddad@uc.cl">
                JLHC
            </Link>
            {' ©'}
        </Typography>
      </footer>
    </div>
  );
}