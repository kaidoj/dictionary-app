import React from 'react';
import { shallow } from 'enzyme';
import NoDictionaries from '../NoDictionaries';

describe('<NoDictionaries />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<NoDictionaries />);
    expect(renderedComponent.length).toEqual(1);
  });
});
