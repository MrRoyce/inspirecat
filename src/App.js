import React, { Component } from 'react';
import Grid        from 'react-bootstrap/lib/Grid';

import Home from './containers/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid className="App">
        <Home />
      </Grid>
    );
  }
}

export default App;
