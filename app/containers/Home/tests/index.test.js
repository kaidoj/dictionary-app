import React from 'react';
import { shallow } from 'enzyme';

import Home from '../index';

describe('<Home />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<Home />);
    expect(renderedComponent.length).toEqual(1);
  });
});
