import React, { Component }   from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Row                    from 'react-bootstrap/lib/Row';
import Col                    from 'react-bootstrap/lib/Col';
import classnames             from 'classnames';

// Action creators
import {
  getCategories,
  getFavorites,
  getCat,
  voteCat } from '../logic/CatAPI.actions';

// Dumb components
import { Select }    from '../components/Select';
import { Stars }     from '../components/Stars';
import { Cat }       from '../components/Cat';
import { Favorites } from '../components/Favorites';

// Render entire app from here
export class Home extends Component {

  //Invoked once, only on the client (not on the server),
  //immediately after the initial rendering occurs.
  componentWillMount() {
    // Get the info from the server
    this.props.getFavorites();
    this.props.getCategories();
    this.props.getCat();
  }

  // Vote for a cat when clicked
  handleRatingClick(nextValue) {
    this.props.voteCat({ image_id: this.props.cat.id, score: nextValue });
  }

  render() {

    if ( !(this.props.categories) || (this.props.categories.length === 0) || (this.props.cat === null) || this.props.cat_loading) {
      return null;
    }
    return (
      <form className="form-horizontal">
        <Row>
          <Col xs={12} sm={4} >
            <div className="di-column">
              <Row>
                <Select options={this.props.categories} label="Categories"/>
              </Row>
              <Row>
                <Col className={classnames('text-center')} >
                  <Cat source_url={this.props.cat.source_url} url={this.props.cat.url} id={this.props.cat.id}/>
                </Col>
              </Row>
              <Row>
                <div>
                  <Stars label="Cat Rating" handleRatingClick={this.handleRatingClick.bind(this)}/>
                </div>
              </Row>
            </div>
          </Col>
          <Col xs={12} sm={8}>
            <div className="di-column">
              <Favorites items={this.props.favorites}/>
            </div>
          </Col>
        </Row>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators( { getCategories, getCat, voteCat, getFavorites }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    favorites          : state.catAPIData.favorites,
    favorites_loading  : state.catAPIData.favorites_loading,
    categories         : state.catAPIData.categories,
    categories_loading : state.catAPIData.categories_loading,
    cat                : state.catAPIData.cat,
    cat_loading        : state.catAPIData.cat_loading
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
