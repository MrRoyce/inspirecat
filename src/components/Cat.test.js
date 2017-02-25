import React from 'react';
import {shallow} from 'enzyme';
import { Cat } from './Cat';

it('renders without crashing', () => {
  shallow(<Cat />);
});
