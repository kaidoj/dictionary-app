import React from 'react';
import { shallow } from 'enzyme';
import EditableTitle from '../../components/EditableTitle';

describe('<EditableTitle />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<EditableTitle
      item={{}}
      update={() => {}}
      dictionary={{}}
      dictionaries={[]}
    />);
    expect(renderedComponent.length).toEqual(1);
  });
});
