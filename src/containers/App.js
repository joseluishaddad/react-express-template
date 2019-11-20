import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import '../assets/App.css';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import Content from './Content';

import Background1 from '../assets/background1.jpg';
import Background2 from '../assets/background2.jpg';
import Background3 from '../assets/background3.jpg';
import Background4 from '../assets/background4.jpg';


const styles = {
  app1: {
    top: '0px',
    padding: '0',
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundPositionY: 'center',
    backgroundPositionX: '80%',
    backgroundImage: `url(${Background1})`,
    transition: '2s',
  },
  app2: {
    top: '0px',
    padding: '0',
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundPositionY: 'center',
    backgroundPositionX: '80%',
    backgroundImage: `url(${Background2})`,
    transition: '2s',
  },
  app3: {
    top: '0px',
    padding: '0',
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundPositionY: 'center',
    backgroundPositionX: '80%',
    backgroundImage: `url(${Background3})`,
    transition: '2s',
  },
  app4: {
    top: '0px',
    padding: '0',
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundPositionY: 'center',
    backgroundPositionX: '80%',
    backgroundImage: `url(${Background4})`,
    transition: '2s',
  },
  content:{
  },
};

function classDecider(currentBackground, classes){
  switch (currentBackground) {
    default:
      return classes.app1
    case 0:
      return classes.app1
    case 1:
      return classes.app2
    case 2:
      return classes.app3
    case 3:
      return classes.app4
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentBackground: 0,
    };
  }

  getCurrentBackground
  componentDidMount() {
    this.interval = setInterval(() => 
      this.setState((state) =>
        ({ currentBackground: (state.currentBackground + 1) % 3 })
        ), 10000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { classes } = this.props;
    const {  currentBackground } = this.state;
    return (
      <div
      className={classDecider(currentBackground, classes)} >
        <AppBar handleClick={this.handleClick}/>
        <Content className={classes.content}/>
        <Footer />
      </div>
    );  
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App);
