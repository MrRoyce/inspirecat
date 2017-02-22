import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
//import Form                   from 'react-bootstrap/lib/Form';
import Row                    from 'react-bootstrap/lib/Row';
import Button                 from 'react-bootstrap/lib/Button';
import Col                    from 'react-bootstrap/lib/Col';
import Modal                  from 'react-bootstrap/lib/Modal';
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
import { Stats }     from '../components/Stats';

// Render entire app from here
export class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal : false
    };
  }

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

    // Show the favorite modal
    this.setState({ showModal: true });
  }

  // Toggle the modal open state
  toggle() {
    this.setState({ showModal : !this.state.showModal });
  }

  closeButtonClicked() {
    this.props.getCat();
    this.setState({ showModal : !this.state.showModal });
  }

  favoriteButtonClicked() {
    this.props.getCat();
    this.setState({ showModal : !this.state.showModal });
  }

  render() {

    if ( !(this.props.categories) || (this.props.categories.length === 0) || (this.props.cat === null)) {
      return null;
    }
    return (
      <span>
        <Modal
          aria-labelledby="favorite-cat-title"
          show={this.state.showModal}
          onHide={this.toggle.bind(this)}
          dialogClassName="favorite-cat-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id='favorite-cat-title'>Thanks for voting!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Would you like to set this cat as a favorite?</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeButtonClicked.bind(this)}>No</Button>
            <Button onClick={this.favoriteButtonClicked.bind(this)} bsStyle="primary">Yes Favorite!</Button>
          </Modal.Footer>
        </Modal>

          <Row>

            <Col xs={12} sm={4} >
              <form className="form-horizontal">
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
              </form>
              <form>
                <div className="di-column">
                  <Row>
                  <Stats gets={this.props.gets} votes={this.props.votes} favs={this.props.favs}/>
                </Row>
                </div>
              </form>
            </Col>

            <Col xs={12} sm={8}>
              <div className="di-column">
                <Favorites items={this.props.favorites}/>
              </div>
            </Col>
          </Row>

      </span>
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
    cat_loading        : state.catAPIData.cat_loading,
    gets               : state.catAPIData.gets,
    votes              : state.catAPIData.votes,
    favs               : state.catAPIData.favs
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
