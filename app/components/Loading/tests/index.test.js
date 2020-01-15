import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../Loading';

describe('<Loading />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<Loading />);
    expect(renderedComponent.length).toEqual(1);
  });
});
