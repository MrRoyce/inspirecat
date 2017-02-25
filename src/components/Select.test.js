import React from 'react';
import {shallow} from 'enzyme';
import { Select } from './Select';

const
  props = {
    options : [

    ]
  }
;
it('renders without crashing', () => {
  shallow(<Select {...props} />);
});
