import React from 'react';
import { shallow } from 'enzyme';
import configureStore from '../../../../configureStore';
import Dictionary from '../index';

describe('<Dictionary />', () => {
  let store;
  it('should render a div', () => {
    store = configureStore({});
    const renderedComponent = shallow(<Dictionary store={store} />);
    expect(renderedComponent.length).toEqual(1);
  });
});
