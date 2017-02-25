import React from 'react';
import {shallow} from 'enzyme';
import { Favorites } from './Favorites';

const
  props = {
    items : [

    ]
  }
;
it('renders without crashing', () => {
  shallow(<Favorites {...props} />);
});
