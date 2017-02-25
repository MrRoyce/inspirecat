import React from 'react';
import {shallow} from 'enzyme';
import { expect }       from 'chai';

import StarRatingComponent from './Rating';

const
  props = {
    name : 'test'
  },
  component = shallow(<StarRatingComponent {...props} />)
;

it('renders without crashing', () => {
  expect(component).to.exist;
});
