import React from 'react';
import {shallow} from 'enzyme';
import { expect }       from 'chai';
import FormControl  from 'react-bootstrap/lib/FormControl';
import Col          from 'react-bootstrap/lib/Col';

import { Stats } from './Stats';

const
  props = {
    options : [

    ]
  }
;

const
  component = shallow(<Stats {...props} />)
;
it('renders without crashing', () => {
  expect(component).to.exist;
});

it('has 3 FormControl', () => {
  expect(component.find(FormControl)).to.have.length(3);
});

it('has 3 Col', () => {
  expect(component.find(Col)).to.have.length(3);
});
