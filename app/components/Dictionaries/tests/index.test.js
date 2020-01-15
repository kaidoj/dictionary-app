import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import configureStore from '../../../configureStore';
import Dictionaries from '../index';

describe('<Dictionaries />', () => {
  let store;
  it('should render a div', () => {
    store = configureStore({});
    const renderedComponent = shallow(<MemoryRouter><Dictionaries store={store} /></MemoryRouter>);
    expect(renderedComponent.length).toEqual(1);
  });
});
