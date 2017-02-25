import React from 'react';
import {shallow} from 'enzyme';
import { expect }       from 'chai';

import StarRatingComponent from './Rating';
import { Stars } from './Stars';

const
  props = {
    options : [

    ]
  }
;

const
  component = shallow(<Stars {...props} />)
;

it('renders without crashing', () => {
  expect(component).to.exist;
});

it('has StarRatingComponent', () => {
  expect(component.find(StarRatingComponent)).to.have.length(1);
});
