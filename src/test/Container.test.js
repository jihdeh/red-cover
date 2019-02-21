import React from 'react';
import { mount } from 'enzyme';
import PropTypes from 'prop-types';
import Context from '../context';
import Container from "../containers/Container";


describe('<Container />', () => {
  it('renders places and checks array is correct',  () => {
    const wrapper = mount(<Container />);
    const findPlaceNames = wrapper.find('.place--detail-name').map(node => node.text());
    expect(findPlaceNames[0]).toEqual('Image One');
    expect(findPlaceNames.length).toBe(11);
  });
})
