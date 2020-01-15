import React from 'react';
import { shallow } from 'enzyme';
import DomainsTable from '../index';

describe('<DomainsTable />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<DomainsTable domains={[]} onDelete={() => {}} />);
    expect(renderedComponent.length).toEqual(1);
  });
});
