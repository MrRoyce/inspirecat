import React                  from 'react';
import { shallow, mount}      from 'enzyme';
import { Home }               from './Home';
import chai, { expect }       from 'chai';
import Modal                  from 'react-bootstrap/lib/Modal';
import Button                 from 'react-bootstrap/lib/Button';

// Dumb components
import { Loading }   from '../components/Loading';
import { Select }    from '../components/Select';
import { Stars }     from '../components/Stars';
import { Cat }       from '../components/Cat';
import { Favorites } from '../components/Favorites';
import { Stats }     from '../components/Stats';

const
  props = {
    getFavorites : () => {},
    getCategories : () => {},
    getCat : () => {},
    categories : [
      {'sports' : 'sports'}
    ],
    cat : {
      name : 'felix'
    }
  }
;

const
  component = shallow(<Home {...props} />),
  cat_loading = shallow(<Home {...props} cat_loading={true}/>)
;

it('renders the component', () => {
  expect(component).to.exist;
});

it('has a loading gif', () => {
  expect(cat_loading.find(Loading)).to.have.length(1);
});

it('has Modal', () => {
  expect(component.find(Modal)).to.have.length(1);
});

it('has Favorites', () => {
  expect(component.find(Favorites)).to.have.length(1);
});

it('has Stars', () => {
  expect(component.find(Stars)).to.have.length(1);
});

it('has Select', () => {
  expect(component.find(Select)).to.have.length(1);
});

it('has Cat', () => {
  expect(component.find(Cat)).to.have.length(1);
});

it('has Stats', () => {
  expect(component.find(Stats)).to.have.length(1);
});

it('has 3 Buttons', () => {
  expect(component.find(Button)).to.have.length(3);
});
