import React from 'react';
import { shallow } from 'enzyme';

import Content from '../index';

describe('<Content />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<Content />);
    expect(renderedComponent.length).toEqual(1);
  });
});
