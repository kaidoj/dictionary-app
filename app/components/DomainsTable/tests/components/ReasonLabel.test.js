import React from 'react';
import { shallow } from 'enzyme';
import ReasonLabel from '../../components/ReasonLabel';

describe('<ReasonLabel />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<ReasonLabel item={{ uuid: 1, reason: { color: '#fff' } }} />);
    expect(renderedComponent.length).toEqual(1);
  });
});
