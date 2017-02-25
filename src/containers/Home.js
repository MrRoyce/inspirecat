import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
//import Form                   from 'react-bootstrap/lib/Form';
import Row                    from 'react-bootstrap/lib/Row';
import Button                 from 'react-bootstrap/lib/Button';
import Col                    from 'react-bootstrap/lib/Col';
import Modal                  from 'react-bootstrap/lib/Modal';
//import classnames             from 'classnames';

// Action creators
import {
  favoriteCat,
  getCategories,
  getFavorites,
  getCat,
  voteCat } from '../logic/CatAPI.actions';

// Dumb components
import { Loading }   from '../components/Loading';
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
      showModal : false,
      rating    : 0,
      category  : 'All'
    };

    this.closeButtonClicked = this.closeButtonClicked.bind(this);
    this.getTheCat          = this.getTheCat.bind(this);
  }

  //Invoked once, only on the client (not on the server),
  //immediately after the initial rendering occurs.
  componentWillMount() {
    // Get the info from the server
    this.props.getFavorites();
    this.props.getCategories();
    this.getTheCat();
  }

  // Vote for a cat when clicked
  handleRatingClick(nextValue) {
    this.props.voteCat({ image_id: this.props.cat.id, score: nextValue });

    // Show the favorite modal
    this.setState({ showModal: true, rating: nextValue });
  }

  // Toggle the modal open state
  toggle() {
    this.setState({ showModal : !this.state.showModal });
  }

  getTheCat() {
    const
      category = (this.state.category === 'All') ? false : this.state.category
    ;
    this.props.getCat(category);
  }

  closeButtonClicked() {
    this.setState({ showModal : !this.state.showModal, rating: 0 }, () => {
      this.getTheCat();
    });
  }

  favoriteButtonClicked() {
    this.props.favoriteCat({ image_id: this.props.cat.id });
    this.props.getFavorites();
    this.closeButtonClicked();  // set the state and get the next cat
  }

  handleCategoryChanged(event) {
    this.setState({'category' : event.target.value}, () => {
      this.getTheCat(); // Get a new cat for the category
    });
  }

  handleFavoriteSelected(selectedIndex) {
    console.log('selectedIndex: ' + selectedIndex);
  }

  render() {

    const
      { favorites, categories, cat, cat_loading, gets, votes, favs } = this.props
    ;

    if ( !(categories) || (categories.length === 0) || (cat === null)) {
      return <p>Fetching your cats...</p>;
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
            <Modal.Title id='favorite-cat-title'>{`You voted that cat a ${this.state.rating}. Thanks for voting!`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Would you like to set this cat as a favorite?</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeButtonClicked.bind(this)}>No</Button>
            <Button onClick={this.favoriteButtonClicked.bind(this)} bsStyle="primary">Yes Favorite!</Button>
          </Modal.Footer>
        </Modal>

          <div className="di-column-wrapper" >
            <div className="di-column-container" >
              <Col xs={12} sm={4} >
                <form className="form-horizontal">
                  <div className="di-column">
                    <Row>
                      <Select options={categories} label="Category" onChange={this.handleCategoryChanged.bind(this)}/>
                    </Row>
                    <Row>
                      <Col className="text-center" >
                        {(() => {  // iffe
                          switch (cat_loading) {
                            // Show loading gif if not loaded
                            case true: return (<div className='cat-img text-center panel-img'><Loading /></div> );

                            default: return (<Cat source_url={cat.source_url} url={cat.url} id={cat.id}/>);
                          }
                        })()}

                      </Col>
                    </Row>
                    <Row>
                      <div>
                        <Stars
                          label="Rate a Cat" handleRatingClick={this.handleRatingClick.bind(this)} value={this.state.rating}
                        />
                      </div>
                    </Row>
                    <Row>
                      <Button onClick={() => {
                        this.getTheCat();
                      }}>Skip this cat!</Button>
                    </Row>
                  </div>
                </form>
                <form>
                  <div className="di-column di-stats">
                    <Row>
                    <Stats
                      gets={gets}
                      votes={votes}
                      favs={favs}
                    />
                  </Row>
                  </div>
                </form>
              </Col>

              <Col xs={12} sm={8}>
                <div className="di-column">
                  <Favorites
                    items={favorites}
                    onSelect={this.handleFavoriteSelected.bind(this)}
                  />
                </div>
              </Col>
            </div>
          </div>

      </span>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators( { getCategories, getCat, voteCat, getFavorites, favoriteCat }, dispatch);
};

const mapStateToProps = (state) => {
  const
    { favorites, categories, cat, cat_loading, gets, votes,  favs } = state.catAPIData;
  return { favorites, categories, cat, cat_loading, gets, votes, favs };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
