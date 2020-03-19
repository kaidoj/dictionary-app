import React from 'react';
import { shallow } from 'enzyme';
import configureStore from '../../../configureStore';
import Domains from '../Domains';

describe('<Domains />', () => {
  let store;
  it('should render a div', () => {
    store = configureStore({});
    const renderedComponent = shallow(<Domains
      store={store}
      dictionaries={[]}
      dictionary={{}}
    />);
    expect(renderedComponent.length).toEqual(1);
  });
});
