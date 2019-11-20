import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/Home';
import UserForm from '../components/UserForm';
import OrgForm from '../components/OrgForm';

const styles = {
  content:{
    width: '100%',
    height: '100%',
    margin: '0px',
    padding: '0px',
  },
  homeContainer: {
    
  }
};

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    }
  }

  render(){
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />

        <Container className={classes.homeContainer}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Container>
        <Container maxWidth="xl" className={classes.content}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/userForm" component={UserForm} />
          <Route path="/organizationForm" component={OrgForm} />
        </Switch>
        </Container>
      </React.Fragment>
    );
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Content)