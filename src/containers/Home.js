import React, { Component }   from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCategories } from '../logic/CatAPI.actions';

// Render entire app from here
export class Home extends Component {

  constructor(props) {
    super(props);
  }

  //Invoked once, only on the client (not on the server),
  //immediately after the initial rendering occurs.
  componentWillMount() {
    // Get the categories for cats
    this.props.getCategories();
  }

  render() {
    return (<span>
      <div className="App-header">
          <h2>Welcome to React and redux component</h2>
        </div>
        <p className="App-intro">
          We are getting started with redux save to reload.
        </p>
    </span>);
  }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators( { getCategories }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    categories : state.categories
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
