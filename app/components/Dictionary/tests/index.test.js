import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import configureStore from '../../../configureStore';
import Dictionary from '../index';

describe('<Dictionary />', () => {
  let store;
  it('should render a div', () => {
    store = configureStore({});
    const renderedComponent = shallow(<MemoryRouter><Dictionary store={store} /></MemoryRouter>);
    expect(renderedComponent.length).toEqual(1);
  });
});
