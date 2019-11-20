import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
    <div className={"main"}>
      <h1>Welcome to React Express App</h1>
      <h3>A React App based frontend with an Express backend</h3>
      <p>Template by <a href="https://github.com/joseluishaddad">JLHC</a>, based on <a href="https://github.com/facebook/create-react-app">create-react-app</a></p>
    </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default App;
