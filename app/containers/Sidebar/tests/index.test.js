import React from 'react';
import { shallow } from 'enzyme';

import Sidebar from '../index';

describe('<Sidebar />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<Sidebar />);
    expect(renderedComponent.length).toEqual(1);
  });
});
